const Post = require("../model/Post").Post; // import {Post} from "../model/Post";
const Category = require("../model/Category").Category; // import {Category} from "../model/Category";

module.exports = {
    target: Post,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        title: {
            type: "varchar"
        },
        text: {
            type: "text"
        }
    },
    relations: {
        categories: {
            target: () => Category,
            type: "many-to-many",
            joinTable: true,
            cascadeInsert: true
        }
    }
};