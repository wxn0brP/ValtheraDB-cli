#!/usr/bin/env bun

import { Valthera } from "@wxn0brp/db";
import { Command } from "commander";
import operations from "./operations";
import { parseData } from "./utils";
import { readFileSync } from "fs";

const program = new Command();
const v = JSON.parse(readFileSync(import.meta.dirname + "/../package.json", "utf-8")).version;

program
    .version(v)
    .description("ValtheraDB CLI")
    .option("-d, --dir <path>", "Directory of the database", process.cwd())
    .option("-j, --json", "Use JSON format");

program
    .command("server [port]")
    .description("Start the server")
    .action(async (port) => {
        const opts = program.opts();
        process.env.DB_DIR = opts.dir;
        if (port) process.env.PORT = port;
        await import("./server");
    });

operations.forEach(operation => {
    program
        .command(operation.name)
        .description(operation.description)
        .allowUnknownOption(true)
        .action(async (...argsRaw) => {
            const options = program.opts();
            const db = new Valthera(options.dir || ".");
            const name = operation.name.split(" ")[0];

            if (argsRaw.length >= 2) {
                const search = argsRaw[1] as string;
                if (search.startsWith("=")) {
                    const [, id, data] = search.split("=");
                    const searchData = { [id]: data };
                    argsRaw[1] = searchData;
                }
            }

            const args = argsRaw.map((data, i) => {
                const type = operation.args[i] || "string";
                return parseData(data, type);
            })

            const result = await db[name](...args);
            console.log(options.json ? JSON.stringify(result) : result);
        });
});

program.
    command("format [path]")
    .description("Format db data")
    .action(async (path) => {
        const { formatDB } = await import("./format");
        await formatDB(path || ".");
        console.log("Formatted Successfully");
    });

program.on("command:*", async (operands) => {
    console.log(`Unrecognized command: ${operands.join(" ")}`);
    const options = program.opts();
    const db = new Valthera(options.dir || ".");
    const result = await db[operands[0]](...operands.slice(1));
    console.log(result);
})

program.parse();