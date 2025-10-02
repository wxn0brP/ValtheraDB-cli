import JSON5 from "json5";
export function parseData(data, type) {
    if (!data)
        return data;
    if (typeof data !== "string")
        return data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRTFCLE1BQU0sVUFBVSxTQUFTLENBQUMsSUFBUyxFQUFFLElBQVk7SUFDN0MsSUFBSSxDQUFDLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUN2QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMxQyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQ1gsS0FBSyxRQUFRO1lBQ1QsT0FBTyxJQUFJLENBQUM7UUFDaEIsS0FBSyxRQUFRO1lBQ1QsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLEtBQUssU0FBUztZQUNWLE9BQU8sSUFBSSxLQUFLLE1BQU0sQ0FBQztRQUMzQixLQUFLLFFBQVE7WUFDVCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QjtZQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ3BCLENBQUM7QUFDTCxDQUFDIn0=