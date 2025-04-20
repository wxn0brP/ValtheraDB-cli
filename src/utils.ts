export function parseData(data: any, type: string) {
    if (!data) return data;
    if (typeof data !== "string") return data;
    switch (type) {
        case "string":
            return data;
        case "object":
            return JSON.parse(data);
        case "boolean":
            return data === "true";
        case "number":
            return Number(data);
        default:
            return data;
    }
}