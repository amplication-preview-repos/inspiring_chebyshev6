import { ClinicProjectsWhereInput } from "./ClinicProjectsWhereInput";
import { ClinicProjectsOrderByInput } from "./ClinicProjectsOrderByInput";

export type ClinicProjectsFindManyArgs = {
  where?: ClinicProjectsWhereInput;
  orderBy?: Array<ClinicProjectsOrderByInput>;
  skip?: number;
  take?: number;
};
