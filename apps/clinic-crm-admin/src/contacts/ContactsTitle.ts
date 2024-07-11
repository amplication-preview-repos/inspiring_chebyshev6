import { Contacts as TContacts } from "../api/contacts/Contacts";

export const CONTACTS_TITLE_FIELD = "id";

export const ContactsTitle = (record: TContacts): string => {
  return record.id?.toString() || String(record.id);
};
