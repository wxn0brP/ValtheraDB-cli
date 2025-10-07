import { appendFile, copyFile, readdir, stat, writeFile } from "fs/promises";
import { createRL } from "@wxn0brp/db-storage-dir/file/utils";
import { parseData, stringifyData } from "@wxn0brp/db-storage-dir/format";
import { join } from "path";

export async function formatDB(path: string) {
    let files: string[];
    const stats = await stat(path);
    if (stats.isDirectory()) files = await getFiles(path);
    else files = [path];

    console.log("Formatting", files.length, "files");
    for (let file of files) {
        console.log(" ", file);
        await formatFile(file);
    }
}

async function getFiles(dir: string): Promise<string[]> {
    const entries = await readdir(dir, { withFileTypes: true, recursive: true }) as any;
    const files = entries
        .filter(entry => entry.isFile())
        .map(file => join(file.path, file.name))
        .filter(file => !file.endsWith(".tmp"));
    return files;
}

async function formatFile(file: string) {
    await copyFile(file, file + ".tmp");
    await writeFile(file, "");
    const rl = createRL(file + ".tmp");

    for await (let line of rl) {
        if (!line || !line.trim()) continue;
        line = await stringifyData(await parseData(line.trim()));
        await appendFile(file, line + "\n");
    }

    await writeFile(file + ".tmp", "");
}