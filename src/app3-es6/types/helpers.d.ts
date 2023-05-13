type Nullables<T> = {
  [P in keyof T]: T[P] extends { nullable: true } ? P : never;
}[keyof T];

type Type<T> = T extends "varchar" | "text"
  ? string
  : T extends "boolean"
  ? boolean
  : T extends "int" | "integer"
  ? number
  : T extends "datetime"
  ? Date
  : T extends "blob"
  ? Buffer
  : unknown;

type ColumnProps<T> = {
  -readonly [P in keyof T]: Type<T[P]["type"]>;
};

type Model<T> = import("./models.js").Models[T];

type Relation<T> = T["type"] extends "many-to-many" | "one-to-many"
  ? Model<T["target"]>[]
  : T["type"] extends "many-to-one" | "one-to-one"
  ? Model<T["target"]>
  : unknown;

type RelationProps<T> = {
  -readonly [P in keyof T]: Relation<T[P]>;
};

type Union<A, B> = unknown extends A ? B : unknown extends B ? A : A | B;

type Merge<A, B, N> = {
  -readonly [P in Exclude<keyof A | keyof B, N>]: Union<A[P], B[P]>;
} & {
  -readonly [P in N]?: Union<A[P], B[P]>;
};

export type EntityProps<T> = Merge<
  ColumnProps<T["columns"]>,
  RelationProps<T["relations"]>,
  Nullables<T["columns"]>
>;
