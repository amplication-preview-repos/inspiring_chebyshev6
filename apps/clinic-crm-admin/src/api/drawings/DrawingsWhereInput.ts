import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type DrawingsWhereInput = {
  id?: StringFilter;
  drawing?: JsonFilter;
};
