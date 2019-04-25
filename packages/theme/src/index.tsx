import * as styledComponents from "styled-components";
import { ITheme, light } from './themes';

const themedStyledComponents = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;
const { default: styled, css, ThemeProvider } = themedStyledComponents;



export { css, styled, ITheme, light, ThemeProvider };
export * from './util';
