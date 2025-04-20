import { createContext, runInContext } from "node:vm";
const sandbox = {
    console: {
        log: console.log,
    },
    Math,
    Date,
    setTimeout: undefined,
    setInterval: undefined,
    setImmediate: undefined,
    clearTimeout: undefined,
    clearInterval: undefined,
    clearImmediate: undefined,
    require: undefined,
    module: undefined,
    exports: undefined,
    process: undefined,
    Buffer: undefined,
};
export function changeStringToFunction(func) {
    try {
        return function (data, ctx) {
            const context = createContext({ ...ctx, ...sandbox });
            const userFunction = runInContext(`(${func})`, context);
            if (typeof userFunction !== "function")
                throw new Error("Invalid function");
            return userFunction(data, ctx);
        };
    }
    catch (e) {
        throw new Error("Invalid function");
    }
}
function deserializeFunctions(data, keys) {
    const setAtPath = (obj, path, value) => {
        const segments = path.split(".").map(segment => segment.replace(/\[dot\]/g, "."));
        let currentLevel = obj;
        for (let i = 0; i < segments.length - 1; i++) {
            const segment = segments[i];
            if (Array.isArray(currentLevel)) {
                const index = parseInt(segment, 10);
                if (!currentLevel[index])
                    currentLevel[index] = {};
                currentLevel = currentLevel[index];
            }
            else if (!currentLevel[segment]) {
                currentLevel[segment] = {};
                currentLevel = currentLevel[segment];
            }
            else {
                currentLevel = currentLevel[segment];
            }
        }
        currentLevel[segments[segments.length - 1]] = value;
    };
    const getAtPath = (obj, path) => {
        const segments = path.split(".").map(key => key.replace(/\[dot\]/g, "."));
        return segments.reduce((acc, key) => {
            if (Array.isArray(acc)) {
                const index = parseInt(key, 10);
                return acc[index];
            }
            return acc && acc[key];
        }, obj);
    };
    keys.forEach((keyPath) => {
        const value = getAtPath(data, keyPath);
        if (typeof value === "string") {
            const fn = changeStringToFunction(value);
            setAtPath(data, keyPath, fn);
        }
        else if (typeof value === "object" && value !== null) {
            if (Array.isArray(value)) {
                value.forEach((item, index) => {
                    if (typeof item === "string") {
                        value[index] = changeStringToFunction(item);
                    }
                });
            }
            else {
                Object.keys(value).forEach((key) => {
                    if (typeof value[key] === "string") {
                        value[key] = changeStringToFunction(value[key]);
                    }
                });
            }
        }
    });
    return data;
}
export default deserializeFunctions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZnVuY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFdEQsTUFBTSxPQUFPLEdBQUc7SUFDWixPQUFPLEVBQUU7UUFDTCxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7S0FDbkI7SUFDRCxJQUFJO0lBQ0osSUFBSTtJQUNKLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLFlBQVksRUFBRSxTQUFTO0lBQ3ZCLFlBQVksRUFBRSxTQUFTO0lBQ3ZCLGFBQWEsRUFBRSxTQUFTO0lBQ3hCLGNBQWMsRUFBRSxTQUFTO0lBQ3pCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE1BQU0sRUFBRSxTQUFTO0NBQ3BCLENBQUM7QUFFRixNQUFNLFVBQVUsc0JBQXNCLENBQUMsSUFBWTtJQUMvQyxJQUFJLENBQUM7UUFDRCxPQUFPLFVBQVUsSUFBUyxFQUFFLEdBQVE7WUFDaEMsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3RELE1BQU0sWUFBWSxHQUFHLFlBQVksQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3hELElBQUksT0FBTyxZQUFZLEtBQUssVUFBVTtnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDNUUsT0FBTyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ1QsTUFBTSxJQUFJLEtBQUss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