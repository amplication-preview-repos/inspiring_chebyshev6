import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ContactsCreateInput = {
  user?: UserWhereUniqueInput | null;
};
