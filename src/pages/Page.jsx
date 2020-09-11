import React from "react";

import "../styles.css";

import Page1Body from "../components/Page1Body";

function chkPropsTitle(title) {
  if (title == null) {
    title = "null";
  }
  return title;
}

function Body(Pg) {
  let body;
  if (Pg === "Page1") {
    body = <Page1Body />;
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
