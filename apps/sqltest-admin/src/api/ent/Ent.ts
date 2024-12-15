import { JsonValue } from "type-fest";

export type Ent = {
  createdAt: Date;
  details: JsonValue;
  id: string;
  name: string | null;
  updatedAt: Date;
};
