import { Ent as TEnt } from "../api/ent/Ent";

export const ENT_TITLE_FIELD = "name";

export const EntTitle = (record: TEnt): string => {
  return record.name?.toString() || String(record.id);
};
