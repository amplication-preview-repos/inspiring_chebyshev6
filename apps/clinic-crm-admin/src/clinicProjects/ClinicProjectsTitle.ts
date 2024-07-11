import { ClinicProjects as TClinicProjects } from "../api/clinicProjects/ClinicProjects";

export const CLINICPROJECTS_TITLE_FIELD = "clinicName";

export const ClinicProjectsTitle = (record: TClinicProjects): string => {
  return record.clinicName?.toString() || String(record.id);
};
