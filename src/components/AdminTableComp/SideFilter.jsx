import * as React from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOnOutlined";
import MailIcon from "@material-ui/icons/MailOutline";
import { FilterList, FilterListItem } from "react-admin";
import {
  endOfYesterday,
  startOfWeek,
  subWeeks,
  startOfMonth,
  subMonths
} from "date-fns";
import { Card as MuiCard, CardContent, withStyles } from "@material-ui/core";
import { FilterLiveSearch } from "react-admin";

const LastVisitedFilter = () => (
  <FilterList label="Last visited" icon={<AccessTimeIcon />}>
    <FilterListItem
      label="Today"
      value={{
        last_seen_gte: endOfYesterday().toISOString(),
        last_seen_lte: undefined
      }}
    />
    <FilterListItem
      label="This week"
      value={{
        last_seen_gte: startOfWeek(new Date()).toISOString(),
        last_seen_lte: undefined
      }}
    />
    <FilterListItem
      label="Last week"
      value={{
        last_seen_gte: subWeeks(startOfWeek(new Date()), 1).toISOString(),
        last_seen_lte: startOfWeek(new Date()).toISOString()
      }}
    />
    <FilterListItem
      label="This month"
      value={{
        last_seen_gte: startOfMonth(new Date()).toISOString(),
        last_seen_lte: undefined
      }}
    />
    <FilterListItem
      label="Last month"
      value={{
        last_seen_gte: subMonths(startOfMonth(new Date()), 1).toISOString(),
        last_seen_lte: startOfMonth(new Date()).toISOString()
      }}
    />
    <FilterListItem
      label="Earlier"
      value={{
        last_seen_gte: undefined,
        last_seen_lte: subMonths(startOfMonth(new Date()), 1).toISOString()
      }}
    />
  </FilterList>
);
const HasOrderedFilter = () => (
  <FilterList label="Has ordered" icon={<MonetizationOnIcon />}>
    <FilterListItem
      label="True"
      value={{
        nb_commands_gte: 1,
        nb_commands_lte: undefined
      }}
    />
    <FilterListItem
      label="False"
      value={{
        nb_commands_gte: undefined,
        nb_commands_lte: 0
      }}
    />
  </FilterList>
);
const HasNewsletterFilter = () => (
  <FilterList label="Has newsletter" icon={<MailIcon />}>
    <FilterListItem label="True" value={{ has_newsletter: true }} />
    <FilterListItem label="False" value={{ has_newsletter: false }} />
  </FilterList>
);

const Card = withStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      order: -1, // display on the left rather than on the right of the list
      width: "15em",
      marginRight: "1em"
    },
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}))(MuiCard);

const SideFilter = () => {
  return (
    <Card>
      <CardContent>
        <FilterLiveSearch source="full_name" />
        <LastVisitedFilter />
        <HasOrderedFilter />
        <HasNewsletterFilter />
      </CardContent>
    </Card>
  );
};

export default SideFilter;
