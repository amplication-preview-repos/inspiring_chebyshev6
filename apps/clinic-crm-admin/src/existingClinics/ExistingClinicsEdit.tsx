import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ExistingClinicsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="clinicAddress" source="clinicAddress" />
      </SimpleForm>
    </Edit>
  );
};
