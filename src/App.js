import React, { useState } from "react";
// import clsx from "clsx";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { withStyles } from "@material-ui/core/styles";
import PageCon from "./controller/PageController";
import SignIn from "./pages/SignIn";
import MyToolbar from "./components/Menu";
import MyDrawer from "./components/MenuList";

const history = createBrowserHistory();

const styles = (theme) => ({
  root: {
    flexGrow: 1
  }
});

function AppBarInteraction({ classes, variant }) {
  const [drawer, setDrawer] = useState(false);
  const [auth, setAuth] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onItemClick = () => () => {
    setDrawer(variant === "temporary" ? false : drawer);
    setDrawer(!drawer);
  };

  const Login = () => {
    setAuth(true);
  };

  const LogOut = () => {
    setAuth(false);
  };

  return (
    <div className={classes.root}>
      <MyToolbar
        title="資産管理システム"
        onMenuClick={toggleDrawer}
        auth={auth}
        onLogOutClick={LogOut}
      />
      <Router history={history}>
        <MyDrawer
          open={drawer}
          onClose={toggleDrawer}
          onItemClick={onItemClick}
          variant={variant}
        />
        <Switch>
          <Route exact path="/">
            <PageCon title="Home" />
          </Route>
          <Route path="/Page1">
            <PageCon title="Page1" />
          </Route>
          <Route path="/Page2">
            <PageCon title="Page2" />
          </Route>
          <Route path="/Page3">
            <PageCon title="Page3" />
          </Route>
          <Route path="/Page4">
            <PageCon title="Page4" />
          </Route>
          <Route path="/login">
            <SignIn onClick={Login} />
          </Route>
        </Switch>
        {auth ? "" : <Redirect to="/login" />}
      </Router>
      {/* {auth ? <p>Login now</p> : <p>Logout now</p>}
      <Button onClick={Login}>Login</Button> */}
    </div>
  );
}

export default withStyles(styles)(AppBarInteraction);
