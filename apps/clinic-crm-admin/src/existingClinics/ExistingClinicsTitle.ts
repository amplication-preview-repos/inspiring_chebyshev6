import { ExistingClinics as TExistingClinics } from "../api/existingClinics/ExistingClinics";

export const EXISTINGCLINICS_TITLE_FIELD = "clinicAddress";

export const ExistingClinicsTitle = (record: TExistingClinics): string => {
  return record.clinicAddress?.toString() || String(record.id);
};
