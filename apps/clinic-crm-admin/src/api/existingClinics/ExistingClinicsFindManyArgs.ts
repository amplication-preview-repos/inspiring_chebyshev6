import { ExistingClinicsWhereInput } from "./ExistingClinicsWhereInput";
import { ExistingClinicsOrderByInput } from "./ExistingClinicsOrderByInput";

export type ExistingClinicsFindManyArgs = {
  where?: ExistingClinicsWhereInput;
  orderBy?: Array<ExistingClinicsOrderByInput>;
  skip?: number;
  take?: number;
};
