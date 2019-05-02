import * as styledComponents from "styled-components";
import { ITheme, light } from './themes';

const themedStyledComponents = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;
const { default: styled, css, ThemeProvider, createGlobalStyle } = themedStyledComponents;

const GlobalStyles = createGlobalStyle`
  body {
    font-family: '${light.fontFace}';
    background-color: ${light.colors.black}
    color: ${light.colors.white}
  }
`


export { css, styled, ITheme, light, ThemeProvider, GlobalStyles };
export * from './util';
