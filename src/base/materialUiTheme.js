import { spacing, getMuiTheme } from 'material-ui/styles'

import raccoonColors from './base'

const materialUiTheme = {
  ...spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: raccoonColors.primary1,
    primary2Color: raccoonColors.primary2,
    primary3Color: raccoonColors.primary3,
    accent1Color: raccoonColors.accent1,
    accent2Color: raccoonColors.accent2,
    accent3Color: raccoonColors.accent3,
    textColor: raccoonColors.textColor,
    alternateTextColor: raccoonColors.alternateTextColor,
    canvasColor: raccoonColors.canvasColor,
    borderColor: raccoonColors.borderColor,
    disabledColor: raccoonColors.disabledColor,
  },
  snackbar: {
    textColor: 'inherit',
    backgroundColor: 'inherit',
  },
}

// Theme must be wrapped in funciton getMuiTheme
export default getMuiTheme(materialUiTheme)
