import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./fonts/static/SpaceGrotesk-Bold.ttf";

import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
h1{
  color: white;
  font-size: 88px;
  line-height: 88px;
  font-weight: 700;
  letter-spacing: -2.5px;
}

h2{
  color: white;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -1.5px;

}

h3{
  color: white;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px; 
}

p{
  color: gray;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
}

*{
  margin: 0;
  padding: 0;
  font-family: "SpaceGrotesk";
  background-color: black;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Global />
    <App />
  </>
);
