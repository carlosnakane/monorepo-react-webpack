import { ITheme } from ".";

const colors = {
  black: '#001C28',
  white: '#DEE8FF',
  primary: '#4262B3',
  secondary: '#91B0FF',
  tertiary: '#789EFF',
  accent: '#B38D30',
}

const titleCommons = {
  color: colors.black,
}

const light: ITheme = {
  fontFace: 'Helvetica, sans serif',
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