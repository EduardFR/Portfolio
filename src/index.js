import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./fonts/static/SpaceGrotesk-Bold.ttf";

import { createGlobalStyle, ThemeProvider } from "styled-components";

const Global = createGlobalStyle`
:root {
  --color-Black: #151515;
  --color-White: #FFFFFF;
  --color-Green: #4ee1a0;
  --color-DarkGray: #242424;
  --color-Gray: #d9d9d9;
}

h1{
  color: var(--color-White);
  font-size: 88px;
  line-height: 88px;
  font-weight: 700;
  letter-spacing: -2.5px;
  @media ${(props) => props.theme.media.phone} {
font-size: 40px;
line-height: 40px;
font-weight: 700;
letter-spacing: -1.14px;
  }
}

h2{
  color: var(--color-White);
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -1.5px;

  @media ${(props) => props.theme.media.phone} {
font-size: 32px;
font-weight: 700;
line-height: 40px;
letter-spacing: -1px;
  }


}

h3{
  color: var(--color-White);
  font-size: 24px;
  font-weight: 700;
  line-height: 32px; 
  @media ${(props) => props.theme.media.phone} {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;  
      }
}

p{
  color: var(--color-Gray);
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;

  @media ${(props) => props.theme.media.phone} {
font-size: 16px;
font-weight: 500;
line-height: 26px;
  }

}

*{
  margin: 0;
  padding: 0;
  font-family: "SpaceGrotesk";
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-Black);
}

`;

const theme = {
  media: {
    phone: "(max-width: 425px)",
    tablet: "(max-width: 768px) and (min-width: 425px) ",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Global />
    <App />
  </ThemeProvider>
);
