import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ClinicProjectsList } from "./clinicProjects/ClinicProjectsList";
import { ClinicProjectsCreate } from "./clinicProjects/ClinicProjectsCreate";
import { ClinicProjectsEdit } from "./clinicProjects/ClinicProjectsEdit";
import { ClinicProjectsShow } from "./clinicProjects/ClinicProjectsShow";
import { ContactsList } from "./contacts/ContactsList";
import { ContactsCreate } from "./contacts/ContactsCreate";
import { ContactsEdit } from "./contacts/ContactsEdit";
import { ContactsShow } from "./contacts/ContactsShow";
import { ExistingClinicsList } from "./existingClinics/ExistingClinicsList";
import { ExistingClinicsCreate } from "./existingClinics/ExistingClinicsCreate";
import { ExistingClinicsEdit } from "./existingClinics/ExistingClinicsEdit";
import { ExistingClinicsShow } from "./existingClinics/ExistingClinicsShow";
import { DrawingsList } from "./drawings/DrawingsList";
import { DrawingsCreate } from "./drawings/DrawingsCreate";
import { DrawingsEdit } from "./drawings/DrawingsEdit";
import { DrawingsShow } from "./drawings/DrawingsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ClinicCRM"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ClinicProjects"
          list={ClinicProjectsList}
          edit={ClinicProjectsEdit}
          create={ClinicProjectsCreate}
          show={ClinicProjectsShow}
        />
        <Resource
          name="Contacts"
          list={ContactsList}
          edit={ContactsEdit}
          create={ContactsCreate}
          show={ContactsShow}
        />
        <Resource
          name="ExistingClinics"
          list={ExistingClinicsList}
          edit={ExistingClinicsEdit}
          create={ExistingClinicsCreate}
          show={ExistingClinicsShow}
        />
        <Resource
          name="Drawings"
          list={DrawingsList}
          edit={DrawingsEdit}
          create={DrawingsCreate}
          show={DrawingsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
