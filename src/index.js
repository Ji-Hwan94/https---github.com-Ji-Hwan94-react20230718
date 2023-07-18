import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// <React.StrictMode> => product용, 혹시 있을 오류를 대비해서 두번씩 랜더링 한다
root.render(<App />);
