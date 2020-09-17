import React from "react";
import Button from "@material-ui/core/Button";

const SignIn = ({ onClick }) => {
  return (
    <React.Fragment>
      <p>Sign Out Now!</p>
      <Button variant="contained" color="primary" onClick={onClick}>
        Sign In?
      </Button>
    </React.Fragment>
  );
};

export default SignIn;
