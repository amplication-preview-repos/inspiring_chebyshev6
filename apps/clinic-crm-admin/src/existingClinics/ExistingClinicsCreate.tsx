import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ExistingClinicsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="clinicAddress" source="clinicAddress" />
      </SimpleForm>
    </Create>
  );
};
