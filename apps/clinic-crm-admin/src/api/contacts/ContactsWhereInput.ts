import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ContactsWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
