import { appendFile, copyFile, readdir, stat, writeFile } from "fs/promises";
import { createRL } from "@wxn0brp/db-storage-dir/file/utils";
import { extendJson, format } from "@wxn0brp/db-storage-dir/format";
import { join } from "path";
import { Format } from "@wxn0brp/db-storage-dir/types";

function getFormat(name: string) {
    const parts = name.split(":");
    const formatName = parts[0];
    const f = format[formatName];

    if (parts[1] === "x") return extendJson(f);
    return f;
}

export async function formatDB(path: string, formatName = "json5:x") {
    let files: string[];
    const stats = await stat(path);
    if (stats.isDirectory()) files = await getFiles(path);
    else files = [path];

    const formatFunc = getFormat(formatName || "json5:x");
    await formatFunc.init();

    console.log("Formatting", files.length, "files");
    for (let file of files) {
        console.log(" ", file);
        await formatFile(file, formatFunc);
    }
}

async function getFiles(dir: string): Promise<string[]> {
    const entries = await readdir(dir, { withFileTypes: true, recursive: true });
    const files = entries
        .filter(entry => entry.isFile())
        .map(file => join(file.parentPath, file.name))
        .filter(file => !file.endsWith(".tmp"));
    return files;
}

async function formatFile(file: string, format: Format) {
    await copyFile(file, file + ".tmp");
    await writeFile(file, "");
    const rl = createRL(file + ".tmp");

    for await (let line of rl) {
        if (!line || !line.trim()) continue;
        line = format.stringify(format.parse(line.trim()));
        await appendFile(file, line + "\n");
    }

    await writeFile(file + ".tmp", "");
}
