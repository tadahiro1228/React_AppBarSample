import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function allyProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const TabBar = ({ value, onChange }) => {
  return (
    <React.Fragment>
      <h5>- Tab -</h5>
      <AppBar position="static">
        <Tabs value={value} onChange={onChange} variant="fullWidth">
          <Tab label="Tab 1" {...allyProps(0)} />
          <Tab label="Tab 2" {...allyProps(1)} />
          <Tab label="Tab 3" {...allyProps(2)} />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
};

export default TabBar;
