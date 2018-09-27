const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Category = require("../model/Category").Category; // import {Category} from "../model/Category";

/*export */ const CategorySchema = new EntitySchema({
    name: "Category",
    target: Category,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        }
    }
});

module.exports = {
    CategorySchema: CategorySchema
};