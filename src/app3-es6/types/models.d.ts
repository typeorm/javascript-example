import { EntityProps } from "./helpers.js";

/** Add your models here to get automatic types for them */

import Category from "../model/Category.js";
import Post from "../model/Category.js";

module "../model/Category.js" {
  export type CategoryProps = EntityProps<typeof Category.definition>;
  export default interface Category extends CategoryProps {}
}

module "../model/Post.js" {
  export type PostProps = EntityProps<typeof Post.definition>;
  export default interface Post extends PostProps {}
}

export type Models = {
  Category: Category;
  Post: Post;
};
