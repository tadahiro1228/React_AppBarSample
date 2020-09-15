import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import MuiDatatable from "../components/MuiDatatable";
import HandsonTable from "../components/HandsonTable";
import AdminTable from "../components/AdminTable";

const Page2 = () => {
  return (
    <div>
      <MuiDatatable />
      <hr />
      <HandsonTable />
      <hr />
      <Admin
        dataProvider={jsonServerProvider(
          "https://jsonplaceholder.typicode.com"
        )}
      >
        <Resource name="users" list={AdminTable} />
      </Admin>
    </div>
  );
};

export default Page2;
