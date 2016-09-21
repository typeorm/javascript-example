const Category = require("../model/Category"); // import {Category} from "../model/Category";
const CategorySchema = {
    target: Category,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "string"
        }
    }
};

module.exports = {
    CategorySchema: CategorySchema
};