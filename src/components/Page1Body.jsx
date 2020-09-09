import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function allyProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const Sheet1 = () => {
  return (
    <React.Fragment>
      <p>This is Icons site</p>
      <a href="https://material-ui.com/components/material-icons/">Go site</a>
    </React.Fragment>
  );
};

const ButtonList = () => {
  return (
    <React.Fragment>
      <Button variant="contained">Default</Button>
      <br />
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <br />
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <br />
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <br />
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </React.Fragment>
  );
};

const Page1Body = () => {
  const [valTabs, setValTabs] = React.useState(0);
  const tabsChange = (evemt, newValue) => {
    setValTabs(newValue);
  };
  return (
    <div>
      <div className="Search">
        This is Button Place!
        <br />
        <ButtonList />
      </div>
      <hr />
      <AppBar position="static">
        <Tabs value={valTabs} onChange={tabsChange} variant="fullWidth">
          <Tab label="Tab 1" {...allyProps(0)} />
          <Tab label="Tab 2" {...allyProps(1)} />
          <Tab label="Tab 3" {...allyProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={valTabs} index={0}>
        <Sheet1 />
      </TabPanel>
      <TabPanel value={valTabs} index={1}>
        Tab 2
      </TabPanel>
      <TabPanel value={valTabs} index={2}>
        Tab 3
      </TabPanel>
    </div>
  );
};

export default Page1Body;
