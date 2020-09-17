import React from "react";
// import clsx from "clsx";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Home as HomeIcon,
  MenuBook as ListIcon,
  SportsKabaddi as UserIcon
} from "@material-ui/icons";

const MenuList = ({ variant, open, onClose, onItemClick }) => (
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

export default MenuList;
