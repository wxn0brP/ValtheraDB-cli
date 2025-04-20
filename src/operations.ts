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
]

export default operations;