import Fastify from "fastify";
import { Valthera } from "@wxn0brp/db";
import deserializeFunctions from "./function";
import path from "path";

const fastify = Fastify();
const dbDir = process.env.DB_DIR || process.cwd();
const port = parseInt(process.env.PORT) || 3333;
const db = new Valthera(dbDir);

fastify.addContentTypeParser("application/json", { parseAs: "string" }, function (req, body, done) {
    try {
        const json = JSON.parse(body as string);
        done(null, json);
    } catch (err) {
        done(err as Error, undefined);
    }
});

fastify.post("/db/:type", async (req, reply) => {
    reply.header("Access-Control-Allow-Origin", "*");
    const { type } = req.params as { type: string };
    const { params, keys } = req.body as {
        params: unknown[],
        keys?: string[]
    };

    if (!type || typeof (db as any)[type] !== "function") {
        return reply.code(400).send({ err: true, msg: "Invalid type" });
    }

    if (!Array.isArray(params) || params.length === 0) {
        return reply.code(400).send({ err: true, msg: "params is required" });
    }

    try {
        const parsedParams = deserializeFunctions(params, keys || []) as any;
        const result = await (db as any)[type](...parsedParams);
        return { err: false, result };
    } catch (e: any) {
        console.error(e);
        return reply.code(500).send({ err: true, msg: e.message });
    }
});

fastify.listen({ port }, err => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`ValtheraDB dev server running at http://localhost:${port}`);
    console.log(`Using database at: ${path.resolve(dbDir)}`);
});
