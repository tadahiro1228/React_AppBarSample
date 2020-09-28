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
  [<button>Update</button>, "Joe James", "Test Corp", "Yonkers", "NY"],
  [<button>Update</button>, "John Walsh", "Test Corp", "Hartford", "CT"],
  [<button>Update</button>, "Bob Herm", "Test Corp", "Tampa", "FL"],
  [<button>Update</button>, "James Houston", "Test Corp", "Dallas", "TX"]
];

const option = {
  search: false,
  print: false,
  downloadOptions: {
    useDisplayedRowsOnly: true
  },
  onRowsDelete: false,
  onDownload: (buildHead, buildBody, columns, data) => {
    var result = window.confirm("CSVを出力します。よろしいですか？");
    if (result) {
      return "\uFEFF" + buildHead(columns) + buildBody(data);
    } else {
      return false;
    }
  },
  onRowClick: (rowData, rowState) => {
    window.confirm(rowData, rowState);
  },
  onRowsSelect: (curRowSelected, allRowsSelected) => {
    console.log("---RowSelect");
    console.log("Row Selected: ", curRowSelected);
    console.log("All Selected: ", allRowsSelected);
  },
  // selectableRows: false,
  selectableRowsHeader: false
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
