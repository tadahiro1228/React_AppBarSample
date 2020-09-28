import React from "react";
import MUIDataTable from "mui-datatables";
import { TableRow, TableCell, Typography } from "@material-ui/core";

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
  selectableRowsonClick: true,
  selectableRowsHeader: false,
  customRowRender: (data, dataIndex, rowIndex) => {
    let style = {};
    if (data[0] === "John Walsh") {
      style.backgroundColor = "green";
    }
    return (
      <TableRow style={style}>
        <TableCell />
        <TableCell>
          <Typography>{data[0]}</Typography>
        </TableCell>
        <TableCell>
          <Typography>{data[1]}</Typography>
        </TableCell>
        <TableCell>
          <Typography>{data[2]}</Typography>
        </TableCell>
        <TableCell>
          <Typography>{data[3]}</Typography>
        </TableCell>
      </TableRow>
    );
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
