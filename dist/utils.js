export function parseData(data, type) {
    if (!data)
        return data;
    if (typeof data !== "string")
        return data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLFNBQVMsQ0FBQyxJQUFTLEVBQUUsSUFBWTtJQUM3QyxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ3ZCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDWCxLQUFLLFFBQVE7WUFDVCxPQUFPLElBQUksQ0FBQztRQUNoQixLQUFLLFFBQVE7WUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsS0FBSyxTQUFTO1lBQ1YsT0FBTyxJQUFJLEtBQUssTUFBTSxDQUFDO1FBQzNCLEtBQUssUUFBUTtZQUNULE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCO1lBQ0ksT0FBTyxJQUFJLENBQUM7SUFDcEIsQ0FBQztBQUNMLENBQUMifQ==