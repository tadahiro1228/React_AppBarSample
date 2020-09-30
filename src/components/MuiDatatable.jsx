import React from "react";
import MUIDataTable from "mui-datatables";

//列の設定
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

//表示するデータ
//実際はDBから取得する事になる想定
const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY", "0"],
  ["John Walsh", "Test Corp", "Hartford", "CT", "0"],
  ["Bob Herm", "Test Corp", "Tampa", "FL", "1"],
  ["James Houston", "Test Corp", "Dallas", "TX", "1"]
];

/*
【表の設定】
search                ：検索フォームの有効化/無効化
print                 ：印刷ボタンの有効化/無効化
downloadOptions       ：CSV出力時の設定
  useDisplayRowsOnly  ：(ﾌｨﾙﾀ有効時等に)表示データのみ出力するかどうか
onRowsDelete          ：行削除ボタン有効化/無効化
onDownload            ：CSV出力処理(関数)
selectableRowsonClick ：
selectableRowsHeader  ：ﾍｯﾀﾞの全選択ﾁｪｯｸﾎﾞｯｸｽ 表示/非表示制御
setRowProps           ：行ﾚﾝﾀﾞ時の制御
onRowSelect           ：ﾁｪｯｸﾎﾞｯｸｽ選択時処理(関数)
*/
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
    if (selectedItems.length > 0) {
      window.confirm(selectedItems);
    }
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
