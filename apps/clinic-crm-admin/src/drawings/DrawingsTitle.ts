import { Drawings as TDrawings } from "../api/drawings/Drawings";

export const DRAWINGS_TITLE_FIELD = "id";

export const DrawingsTitle = (record: TDrawings): string => {
  return record.id?.toString() || String(record.id);
};
