const Category = require("../model/Category").Category; // import {Category} from "../model/Category";

module.exports = {
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
};