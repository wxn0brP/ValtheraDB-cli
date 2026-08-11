import { ValtheraCreate } from "@wxn0brp/db";
import FalconFrame from "@wxn0brp/falcon-frame";
import { deserializeFunctions } from "@wxn0brp/wts-run-fn";
import path from "path";

const app = new FalconFrame();
const dbDir = process.env.DB_DIR || process.cwd();
const port = parseInt(process.env.PORT) || 3333;
const db = ValtheraCreate(dbDir);

app.setOrigin([
	"*",
]);

app.post("/db/:type", async (req, res) => {
	const { type } = req.params;
	const { keys, query } = req.body;

	if (!type || typeof (db as any)[type] !== "function") {
		res.status(400);
		return {
			err: true,
			msg: "Invalid type",
		};
	}
	const str = type + "(" + Bun.JSON5.stringify(query) + ")";
	console.log(str);

	try {
		const parsedParams = deserializeFunctions(query, keys || []);
		const result = await (db as any)[type](parsedParams);
		return {
			err: false,
			result,
		};
	} catch (e: any) {
		console.error(e);
		res.status(500);
		return {
			err: true,
			msg: e.message,
		};
	}
});

app.listen(port, () => {
	console.log(`ValtheraDB dev server running at http://localhost:${port}`);
	console.log(`Using database at: ${path.resolve(dbDir)}`);
	console.log();
	console.warn(
		"    \x1b[33mWARNING: This is a development server and should not be used in production.\x1b[0m",
	);
	console.log();
});
