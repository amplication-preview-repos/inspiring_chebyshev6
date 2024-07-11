import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ExistingClinicsWhereInput = {
  id?: StringFilter;
  clinicAddress?: StringNullableFilter;
};
