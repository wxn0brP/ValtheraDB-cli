import { Valthera } from "@wxn0brp/db";
import deserializeFunctions from "./function";
import path from "path";
import FalconFrame from "@wxn0brp/falcon-frame";
import { createCORSPlugin } from "@wxn0brp/falcon-frame/plugins/cors";
import JSON5 from "json5";

const app = new FalconFrame();
const dbDir = process.env.DB_DIR || process.cwd();
const port = parseInt(process.env.PORT) || 3333;
const db = new Valthera(dbDir);

app.use(createCORSPlugin(["*"]).process);

app.post("/db/:type", async (req, res) => {
    const { type } = req.params;
    const { params, keys } = req.body as {
        params: unknown[],
        keys?: string[]
    };

    if (!type || typeof (db as any)[type] !== "function") {
        res.status(400)
        return { err: true, msg: "Invalid type" };
    }

    if (!Array.isArray(params) || params.length === 0) {
        res.status(400);
        return { err: true, msg: "params is required" };
    }

    const paramArgs = params.map(param => JSON5.stringify(param));
    const str = type + "(" + paramArgs.join(", ") + ")";
    console.log(str);

    try {
        const parsedParams = deserializeFunctions(params, keys || []) as any;
        const result = await (db as any)[type](...parsedParams);
        return { err: false, result };
    } catch (e: any) {
        console.error(e);
        res.status(500);
        return { err: true, msg: e.message };
    }
});

app.listen(port, () => {
    console.log(`ValtheraDB dev server running at http://localhost:${port}`);
    console.log(`Using database at: ${path.resolve(dbDir)}`);
});
