import React from "react";
import { Filter, TextInput } from "react-admin";

const PFilter = (props) => (
  <Filter {...props}>
    <TextInput label="id" source="id" alwaysOn />
    <TextInput label="Name" source="name" alwaysOn />
  </Filter>
);

export default PFilter;
