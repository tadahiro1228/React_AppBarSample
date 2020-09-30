import React from "react";
import MUIDataTable from "mui-datatables";
// import { TableRow, TableCell, Typography } from "@material-ui/core";

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
  },
  {
    name: "DeleteFlag",
    label: "DeleteFlag",
    options: {
      display: "excluded",
      filter: true,
      filterType: "checkbox"
    }
  }
];
const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY", "0"],
  ["John Walsh", "Test Corp", "Hartford", "CT", "0"],
  ["Bob Herm", "Test Corp", "Tampa", "FL", "1"],
  ["James Houston", "Test Corp", "Dallas", "TX", "1"]
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
  //onRowClick: (rowData, rowState) => {
  //  window.confirm(rowData, rowState);
  //},
  selectableRowsonClick: true,
  selectableRowsHeader: false,
  setRowProps: (row) => {
    if (row[4] === "1") {
      return { style: { background: "#a9a9a9" } };
    }
  },
  onRowsSelect: (currentRowsSelected, allRowsSelected) => {
    let selectedItems = allRowsSelected.map((item) => {
      // let selectedDatas = item.map((data) => [data.index])
      return data[item.index];
    });
    window.confirm(selectedItems);
  }
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
