import React from "react";
import { HotTable } from "@handsontable/react";
import Handsontable from "handsontable";

import "handsontable/dist/handsontable.min.css";

class HandsonTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        data: Handsontable.helper.createSpreadsheetData(15, 10),
        // width: 570,
        // height: 500,
        rowHeaders: true,
        colHeaders: true,
        licenseKey: "non-commercial-and-evaluation"
      }
    };
  }

  handleChange = (setting, states) => {
    return (event) => {
      this.setState({
        settings: {
          [setting]: states[event.target.checked ? 1 : 0]
        }
      });
    };
  };

  render() {
    return (
      <div>
        <div>
          handsontableの表
          <br />
          Excelベースの表記が可能
          <br />
          <a href="https://handsontable.com/docs/8.0.0/tutorial-introduction.html">
            Documentation
          </a>
        </div>
        <HotTable root="hot" settings={this.state.settings} />
      </div>
    );
  }
}

export default HandsonTable;
