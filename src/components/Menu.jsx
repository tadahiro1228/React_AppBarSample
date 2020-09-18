import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import {
  Menu as MenuIcon,
  MeetingRoom as LogoutIcon
} from "@material-ui/icons";

const styles = (theme) => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
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

const MyToolbar = withStyles(styles)(
  ({ classes, title, onMenuClick, auth, onLogOutClick }) => (
    <React.Fragment>
      <AppBar className={classes.aboveDrawer}>
        <Toolbar>
          {auth ? (
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={onMenuClick}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            ""
          )}
          <Typography variant="h6" color="inherit" className={classes.flex}>
            {title}
          </Typography>
          {auth ? (
            <IconButton
              className={classes.logoutButton}
              color="inherit"
              aria-label="Logout"
              onClick={onLogOutClick}
            >
              <LogoutIcon />
            </IconButton>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
);

export default MyToolbar;
