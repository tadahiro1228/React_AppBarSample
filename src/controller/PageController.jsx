import React from "react";

import "../styles.css";

import Home from "../pages/Home";
import Page1 from "../pages/Page1";

function chkPropsTitle(title) {
  if (title == null) {
    title = "null";
  }
  return title;
}

function Body(Pg) {
  let body;
  if (Pg === "Home") {
    body = <Home />;
  } else if (Pg === "Page1") {
    body = <Page1 />;
  } else {
    body = <p>This Page is not created!</p>;
  }
  return body;
}

class Page extends React.Component {
  render() {
    return (
      <div>
        <h1>This is {chkPropsTitle(this.props.title)}</h1>
        <div className="Body">{Body(this.props.title)}</div>
      </div>
    );
  }
}

export default Page;
