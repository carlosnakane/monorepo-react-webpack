import { ITheme } from ".";

const colors = {
  black: '#1b212c',
  white: '#FFFFFF',
  darkGray: '#303b4e',
  primary: '#2196f3',
  secondary: '#82c7a5',
  tertiary: '#789EFF',
  accent: '#B38D30',
}

const titleCommons = {
  color: colors.black,
}

const light: ITheme = {
  fontFace: 'Helvetica',
  borderRadius: '5px',
  colors: colors,
  text: {
    title1: {
      ...titleCommons,
      size: '16px',
    },
    title2: {
      ...titleCommons,
      size: '14px',
    },
    title3: {
      ...titleCommons,
      size: '12px',
    }
  },
  padding: {
    top: '5px',
    right: '5px',
    bottom: '5px',
    left: '5px'
  },
  margin: {
    top: '10px',
    right: '5px',
    bottom: '5px',
    left: '5px'
  }
}

export { light };