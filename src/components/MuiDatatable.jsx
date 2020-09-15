import React from "react";
import MUIDataTable from "mui-datatables";

const columns = [
  {
    name: "Name",
    label: "Name",
    options: { filter: true, filterType: "textField", sort: true }
  },
  {
    name: "Company",
    label: "Company",
    options: {
      filter: true,
      filterType: "dropdown",
      sort: true
    }
  },
  {
    name: "City",
    label: "City",
    options: {
      filter: true,
      filterType: "multiselect",
      sort: true
    }
  },
  {
    name: "State",
    label: "State",
    options: {
      filter: true,
      filterType: "checkbox",
      sort: true
    }
  }
];

const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"]
];

const option = {
  search: false,
  print: false
};

const MuiDatatable = () => {
  return (
    <div>
      <div>
        MuiDatatable( Material-UI Datatable ) を使った表
        <br />
        1番シンプル？（編集が出来ない？)
      </div>
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={option}
      />
    </div>
  );
};

export default MuiDatatable;
