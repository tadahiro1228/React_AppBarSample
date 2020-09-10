import React, { useState, Fragment } from "react";
import clsx from "clsx";
import { Router, Route, Link, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  MenuBook as ListIcon,
  MeetingRoom as LogoutIcon,
  SportsKabaddi as UserIcon
} from "@material-ui/icons";

import Home from "./pages/Home";
import Page from "./pages/Page";

const drawerWidth = 280;
const history = createBrowserHistory();

const styles = (theme) => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 10
  }
});

const MyToolbar = withStyles(styles)(({ classes, title, onMenuClick }) => (
  <Fragment>
    <AppBar className={classes.aboveDrawer}>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.flex}>
          {title}
        </Typography>
        <IconButton
          className={classes.logoutButton}
          color="inherit"
          aria-label="Logout"
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <div className={classes.toolbarMargin} />
  </Fragment>
));

const MyDrawer = ({ variant, open, onClose, onItemClick }) => (
  <Drawer variant={variant} open={open} onClose={onClose}>
    <List>
      <ListItem button component={Link} to="/" onClick={onItemClick()}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText>Home</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/Page1" onClick={onItemClick()}>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText>PC管理台帳</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/Page2" onClick={onItemClick()}>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText>PC持出台帳</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/Page3" onClick={onItemClick()}>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText>ポータブルストレージ管理台帳</ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/Page4" onClick={onItemClick()}>
        <ListItemIcon>
          <UserIcon />
        </ListItemIcon>
        <ListItemText>ユーザ管理</ListItemText>
      </ListItem>
    </List>
  </Drawer>
);

function AppBarInteraction({ classes, variant }) {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onItemClick = () => () => {
    setDrawer(variant === "temporary" ? false : drawer);
    setDrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <MyToolbar title="資産管理システム" onMenuClick={toggleDrawer} />
      <Router history={history}>
        <MyDrawer
          open={drawer}
          onClose={toggleDrawer}
          onItemClick={onItemClick}
          variant={variant}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Page1">
            <Page title="Page1" />
          </Route>
          <Route path="/Page2">
            <Page title="Page2" />
          </Route>
          <Route path="/Page3">
            <Page title="Page3" />
          </Route>
          <Route path="/Page4">
            <Page title="Page4" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default withStyles(styles)(AppBarInteraction);
