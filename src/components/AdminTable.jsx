import React from "react";
import { List, Datagrid, TextField, EditButton } from "react-admin";
import { BulkDeleteButton } from "react-admin";

import ResetViewsButton from "./AdminTableComp/ResetViewsButton";
import ListActions from "./AdminTableComp/ListAction";
import exporter from "./AdminTableComp/exporter";
import Filter from "./AdminTableComp/PFilter";

const PostBulkActionButtons = (props) => (
  <React.Fragment>
    <ResetViewsButton label="Reset Views" {...props} />
    {/* default bulk delete action */}
    <BulkDeleteButton {...props} />
  </React.Fragment>
);

const AdminTable = (props) => (
  <React.Fragment>
    <div>
      React-admin を使った表
      <br />
      デフォルトでCSV出力機能がついている。(項目は指定必須）
    </div>
    <List
      {...props}
      title="List of Users"
      actions={<ListActions />}
      exporter={exporter}
      bulkActionButtons={<PostBulkActionButtons />}
      filters={<Filter />}
      // aside={<SideFilter />}
    >
      <Datagrid>
        <EditButton />
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <TextField source="email" />
        <TextField source="address" />
      </Datagrid>
    </List>
  </React.Fragment>
);

export default AdminTable;
