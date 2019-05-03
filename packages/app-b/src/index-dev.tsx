import { render } from "react-dom";
import * as React from "react";
import { GlobalStyles, ThemeProvider, light } from '@we/theme';
import AppB from "./";

const rootElement = document.getElementById("root");

const WithInfra = () => (
  <ThemeProvider theme={light}>
  <ThemeProvider theme={light}>
    <div>
      <GlobalStyles />
      <AppB />
    </div>
  </ThemeProvider>
  </ThemeProvider>
);

render(<WithInfra />, rootElement);
