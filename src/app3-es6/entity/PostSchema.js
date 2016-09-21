const Post = require("../model/Post"); // import {Post} from "../model/Post";
const Category = require("../model/Category"); // import {Category} from "../model/Category";
const PostSchema = {
    target: Post,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        title: {
            type: "string"
        },
        text: {
            type: "text"
        }
    },
    relations: {
        categories: {
            target: Category,
            type: "many-to-many",
            joinTable: true,
            cascadeInsert: true
        }
    }
};

module.exports = {
    PostSchema: PostSchema
};