import { DataSource } from "typeorm";

import Post from "./model/Post.js";
import Category from "./model/Category.js";

const dataSource = new DataSource({
  type: "better-sqlite3",
  database: "app3-es6.db",
  synchronize: true,
  logging: false,
  entities: [Post.schema, Category.schema],
});

await dataSource.initialize();

const category1 = new Category(1, "TypeScript");
const category2 = new Category(2, "Programming");

await Category.save([category1, category2]);

const post = new Post();
post.title = "Control flow based type analysis";
post.text =
  "TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.";
post.categories = [category1, category2];

const savedPost = await post.save();
console.log("Post has been saved: ", savedPost);
console.log("Now lets load all posts: ");

const allPosts = await Post.find({ relations: { categories: true } });

console.log("All posts: ", allPosts);
