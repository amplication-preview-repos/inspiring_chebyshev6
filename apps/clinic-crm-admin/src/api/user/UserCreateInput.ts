import { InputJsonValue } from "../../types";
import { ContactsCreateNestedManyWithoutUsersInput } from "./ContactsCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  contactsItems?: ContactsCreateNestedManyWithoutUsersInput;
};
