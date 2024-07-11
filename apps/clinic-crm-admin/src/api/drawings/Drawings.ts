import { JsonValue } from "type-fest";

export type Drawings = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  drawing: JsonValue;
};
