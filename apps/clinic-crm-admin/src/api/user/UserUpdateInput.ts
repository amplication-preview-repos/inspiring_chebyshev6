import { InputJsonValue } from "../../types";
import { ContactsUpdateManyWithoutUsersInput } from "./ContactsUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  contactsItems?: ContactsUpdateManyWithoutUsersInput;
};
