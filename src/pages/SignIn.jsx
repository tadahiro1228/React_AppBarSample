import React from "react";
import Button from "@material-ui/core/Button";

const SignIn = ({ onClick }) => {
  return (
    <React.Fragment>
      <p>Sign Out Now!</p>
      <Button onclick={onClick}>SignIn?</Button>
    </React.Fragment>
  );
};

export default SignIn;
