import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EntList } from "./ent/EntList";
import { EntCreate } from "./ent/EntCreate";
import { EntEdit } from "./ent/EntEdit";
import { EntShow } from "./ent/EntShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"sqltest"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Ent"
          list={EntList}
          edit={EntEdit}
          create={EntCreate}
          show={EntShow}
        />
      </Admin>
    </div>
  );
};

export default App;
