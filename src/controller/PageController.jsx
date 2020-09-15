import React from "react";

// style(デザイン)
import "../styles.css";

// 遷移ページ
import Home from "../pages/Home";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";

// App.js から渡された title が
// null, undefined, 空文字, false の場合
// 文字列"null"を設定する。
function chkPropsTitle(title) {
  if (!title) {
    title = "null";
  }
  return title;
}

// App.js から渡された title で
// どのページを表示するか判定
function Body(Pg) {
  switch (Pg) {
    case "Home":
      return <Home />;
    case "Page1":
      return <Page1 />;
    case "Page2":
      return <Page2 />;
    case "Page3":
      return <Page3 />;
    default:
      return <p>This Page is not created!</p>;
  }
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
