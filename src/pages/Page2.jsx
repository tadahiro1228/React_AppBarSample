import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import HandsonTable from "../components/HandsonTable";
import AdminTable from "../components/AdminTable";

const Page2 = () => {
  return (
    <div>
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
