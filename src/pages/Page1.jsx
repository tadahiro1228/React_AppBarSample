import React from "react";
import Button from "@material-ui/core/Button";

import TabBar from "../components/TabBar";
import TabPanel from "../components/TabPanel";

// Tab シート1
const Sheet1 = () => {
  return (
    <div>
      This is Icons site
      <br />
      <a href="https://material-ui.com/components/material-icons/">Go site</a>
    </div>
  );
};

// ButtonList コンポーネント
const ButtonList = () => {
  return (
    <React.Fragment>
      <h5>- Button -</h5>
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
  // 状態管理変数
  const [valTabs, setValTabs] = React.useState(0);

  // Tab遷移時処理
  const tabsChange = (evemt, newValue) => {
    setValTabs(newValue);
  };
  return (
    <div>
      <div className="Search">
        <ButtonList />
      </div>
      <hr />
      <TabBar value={valTabs} onChange={tabsChange} />
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
