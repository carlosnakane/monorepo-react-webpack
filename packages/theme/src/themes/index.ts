import { light } from './light'

type Colors = {
  black: string,
  white: string
  darkGray: string,
  primary: string,
  secondary: string,
  tertiary: string,
  accent: string,
};

type Text = {
  size: string,
  color: string
}

type Texts = {
  title1: Text,
  title2: Text,
  title3: Text
}

type Padding = {
  top: string,
  right: string,
  bottom: string,
  left: string,
}

type Margin = Padding;

interface ITheme {
  borderRadius: string
  colors: Colors
  text: Texts,
  padding: Padding,
  margin: Margin,
  fontFace: string,
}


export { ITheme, light };
