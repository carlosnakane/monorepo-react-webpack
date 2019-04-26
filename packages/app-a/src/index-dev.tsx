import { render } from "react-dom";
import * as React from "react";
import { ThemeProvider, light } from '@we/theme';
import AppB from "./";

const rootElement = document.getElementById("root");

const WithInfra = () => (
  <ThemeProvider theme={light}>
      <AppB />
  </ThemeProvider>
);

render(<WithInfra />, rootElement);
