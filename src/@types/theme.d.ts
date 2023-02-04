import { Theme, ThemeOptions } from '@mui/material/styles'

export interface CustomTheme {
  customBreakpoints: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
  }
  colors: {
    orange: {
      o50: string
      o75: string
      o100: string
      o200: string
      o300: string
      o400: string
      o500: string
    }
    purple: {
      p50: string
      p75: string
      p100: string
      p200: string
      p300: string
      p400: string
      p500: string
    }
    success: {
      s50: string
      s75: string
      s100: string
      s200: string
      s300: string
      s400: string
      s500: string
    }
    warning: {
      w50: string
      w75: string
      w100: string
      w200: string
      w300: string
      w400: string
      w500: string
    }
    danger: {
      d50: string
      d75: string
      d100: string
      d200: string
      d300: string
      d400: string
      d500: string
    }
    neutrals: {
      white: string
      black: string
      n10: string
      n20: string
      n30: string
      n40: string
      n50: string
      n60: string
      n70: string
      n80: string
      n90: string
      n100: string
      n200: string
      n300: string
      n400: string
      n500: string
      n600: string
      n700: string
      n800: string
      n900: string
    }
  }
  borderRadius: {
    none: string
    xs: string
    sm: string
    md: string
    lg: string
    pill: string
    circular: string
  }
  border: {
    none: string
    hairline: string
    thin: string
    thick: string
    heavy: string
  }
  spacings: {
    stack: {
      none: string
      xs2: string
      xs1: string
      sm: string
      md: string
      lg: string
      xl1: string
      xl2: string
      xl3: string
      xl4: string
      xl5: string
      huge: string
      giant: string
      full: string
    }
    inline: {
      none: string
      xs2: string
      xs1: string
      sm: string
      md: string
      lg: string
      xl1: string
    }
    inset: {
      xs2: string
      xs1: string
      sm: string
      md: string
      lg: string
      xl1: string
      xl2: string
    }
    squishedInset: {
      xs1: string
      sm: string
      md: string
      lg: string
      xl1: string
    }
    stretchedInset: {
      xs1: string
      sm: string
      md: string
      lg: string
      xl1: string
    }
  }
}

declare module '@mui/material/styles' {
  interface Theme extends CustomTheme { }
  interface ThemeOptions extends CustomTheme { }
}

declare module '@mui/system' {
  interface Theme extends CustomTheme { }
  interface ThemeOptions extends CustomTheme { }
}
