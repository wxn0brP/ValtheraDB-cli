import JSON5 from "json5";

export function parseData(data: any, type: string) {
    if (!data) return data;
    if (typeof data !== "string") return data;
    switch (type) {
        case "string":
            return data;
        case "object":
            return JSON5.parse(data);
        case "boolean":
            return data === "true";
        case "number":
            return Number(data);
        default:
            return data;
    }
}