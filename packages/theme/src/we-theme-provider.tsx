import React from 'react';
import { ThemeProvider } from "styled-components";
import { ITheme } from "./themes";

type Props = {
  theme: ITheme,
  children: JSX.Element
};

type CurrentTheme = ITheme | {};
var currentTheme: CurrentTheme = {};

const WeThemeProvider = (props: Props) => {
  currentTheme = props.theme;
  return (
    <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>
  );
};

export { currentTheme };
export default WeThemeProvider;
