const typeorm = require("typeorm"); // import * as typeorm from "typeorm";
const Post = require("./model/Post"); // import {Post} from "./model/Post";
const Category = require("./model/Category"); // import {Category} from "./model/Category";

typeorm.createConnection({
    driver: {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "test",
        password: "admin",
        database: "test"
    },
    entities: [
        __dirname + "/entity/*.js"
    ],
    autoSchemaSync: true
}).then(function (connection) {
    console.log(connection);

    let post = new Post();
    post.title = "Control flow based type analysis";
    post.text = "TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.";
    post.categories = [new Category(0, "TypeScript"), new Category(0, "Programming")];

    let postRepository = connection.getRepository(Post);
    postRepository.persist(post)
        .then(function(savedPost) {
            console.log("Post has been saved: ", savedPost);
            console.log("Now lets load all posts: ");

            return postRepository.find();
        })
        .then(function(allPosts) {
            console.log("All posts: ", allPosts);
        });


}).catch(function(error) {
    console.log("Error: ", error);
});