const operations = [
    {
        name: "getCollections",
        description: "Get all collections",
        args: [],
        min: 0
    },
    {
        name: "checkCollection <collection>",
        description: "Check if a collection exists",
        args: ["string"],
        min: 1
    },
    {
        name: "issetCollection <collection>",
        description: "Check if a collection exists",
        args: ["string"],
        min: 1
    },
    {
        name: "add <collection> <data> [id_gen]",
        description: "Add a document to a collection",
        args: ["string", "object", "boolean"],
        min: 2
    },
    {
        name: "find <collection> <search> [context] [options] [findOpts]",
        description: "Find documents in a collection",
        args: ["string", "object", "object", "object", "object"],
        min: 2
    },
    {
        name: "findOne <collection> <search> [context] [findOpts]",
        description: "Find one document in a collection",
        args: ["string", "object", "object", "object"],
        min: 2
    },
    {
        name: "update <collection> <search> <updater> [context]",
        description: "Update documents in a collection",
        args: ["string", "object", "object", "object"],
        min: 3
    },
    {
        name: "updateOne <collection> <search> <updater> [context]",
        description: "Update one document in a collection",
        args: ["string", "object", "object", "object"],
        min: 3
    },
    {
        name: "remove <collection> <search> [context]",
        description: "Remove documents in a collection",
        args: ["string", "object", "object"],
        min: 2
    },
    {
        name: "removeOne <collection> <search> [context]",
        description: "Remove one document in a collection",
        args: ["string", "object", "object"],
        min: 2
    },
    {
        name: "removeCollection <collection>",
        description: "Remove a collection",
        args: ["string"],
        min: 1
    }
];
export default operations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9vcGVyYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxHQUFHO0lBQ2Y7UUFDSSxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsSUFBSSxFQUFFLEVBQUU7UUFDUixHQUFHLEVBQUUsQ0FBQztLQUNUO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsOEJBQThCO1FBQ3BDLFdBQVcsRUFBRSw4QkFBOEI7UUFDM0MsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ2hCLEdBQUcsRUFBRSxDQUFDO0tBQ1Q7SUFDRDtRQUNJLElBQUksRUFBRSw4QkFBOEI7UUFDcEMsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDaEIsR0FBRyxFQUFFLENBQUM7S0FDVDtJQUNEO1FBQ0ksSUFBSSxFQUFFLGtDQUFrQztRQUN4QyxXQUFXLEVBQUUsZ0NBQWdDO1FBQzdDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDO1FBQ3JDLEdBQUcsRUFBRSxDQUFDO0tBQ1Q7SUFDRDtRQUNJLElBQUksRUFBRSwyREFBMkQ7UUFDakUsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO1FBQ3hELEdBQUcsRUFBRSxDQUFDO0tBQ1Q7SUFDRDtRQUNJLElBQUksRUFBRSxvREFBb0Q7UUFDMUQsV0FBVyxFQUFFLG1DQUFtQztRQUNoRCxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7UUFDOUMsR0FBRyxFQUFFLENBQUM7S0FDVDtJQUNEO1FBQ0ksSUFBSSxFQUFFLGtEQUFrRDtRQUN4RCxXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztRQUM5QyxHQUFHLEVBQUUsQ0FBQztLQUNUO0lBQ0Q7UUFDSSxJQUFJLEVBQUUscURBQXFEO1FBQzNELFdBQVcsRUFBRSxxQ0FBcUM7UUFDbEQsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO1FBQzlDLEdBQUcsRUFBRSxDQUFDO0tBQ1Q7SUFDRDtRQUNJLElBQUksRUFBRSx3Q0FBd0M7UUFDOUMsV0FBVyxFQUFFLGtDQUFrQztRQUMvQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztRQUNwQyxHQUFHLEVBQUUsQ0FBQztLQUNUO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsMkNBQTJDO1FBQ2pELFdBQVcsRUFBRSxxQ0FBcUM7UUFDbEQsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7UUFDcEMsR0FBRyxFQUFFLENBQUM7S0FDVDtJQUNEO1FBQ0ksSUFBSSxFQUFFLCtCQUErQjtRQUNyQyxXQUFXLEVBQUUscUJBQXFCO1FBQ2xDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNoQixHQUFHLEVBQUUsQ0FBQztLQUNUO0NBQ0osQ0FBQTtBQUVELGVBQWUsVUFBVSxDQUFDIn0=