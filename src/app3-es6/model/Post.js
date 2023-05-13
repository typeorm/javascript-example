import { BaseEntity, EntitySchema } from "typeorm";

export default class Post extends BaseEntity {
  /**
   *
   * @param {number} [id]
   * @param {string} [title]
   * @param {string} [text]
   * @param {import('./Category.js').default[]} [categories]
   */
  constructor(id, title, text, categories) {
    super();
    this.id = id;
    this.title = title;
    this.text = text;
    this.categories = categories;
  }
}

/** @satisfies {import('typeorm').EntitySchemaOptions<Record<string, unknown>>} */
const definition = {
  name: "Post",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    title: {
      type: "varchar",
    },
    text: {
      type: "text",
    },
  },
  relations: {
    categories: {
      target: /** @type {const} */ ("Category"),
      type: "many-to-many",
      joinTable: true,
      cascade: true,
    },
  },
};

Post.definition = definition;
// @ts-expect-error
Post.schema = new EntitySchema({ ...definition, target: Post });
