import { User } from "../user/User";

export type Contacts = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
};
