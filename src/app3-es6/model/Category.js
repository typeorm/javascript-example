import { BaseEntity, EntitySchema } from "typeorm";

export default class Category extends BaseEntity {
  /**
   *
   * @param {number} [id]
   * @param {string} [name]
   */
  constructor(id, name) {
    super();
    this.id = id;
    this.name = name;
  }
}

/** @satisfies {import('typeorm').EntitySchemaOptions<Record<string, unknown>>} */
const definition = {
  name: "Category",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
  },
};

Category.definition = definition;
Category.schema = new EntitySchema({ ...definition, target: Category });
