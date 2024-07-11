import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ClinicProjectsWhereInput = {
  id?: StringFilter;
  clinicName?: StringNullableFilter;
};
