import { render } from "react-dom";
import * as React from "react";
import { GlobalStyles, ThemeProvider, light } from '@we/theme';
import AppA from "./";

const rootElement = document.getElementById("root");

const WithInfra = () => (
  <ThemeProvider theme={light}>
    <div>
      <GlobalStyles />
      <AppA />
    </div>
  </ThemeProvider>
);

render(<WithInfra />, rootElement);
