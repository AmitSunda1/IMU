import { createTheme } from "@mui/material/styles";

export const primaryColors = {
  primary: "#234083",
  primaryLight: "#5074b6",
  primaryExtraLight: "#dce5f9",
  primaryPale: "#c2d6ff",
  primarySurface: "#f5f8ff",
  primaryAccent: "#84a6e6",
  primaryDark: "#1e3a69",
  primaryIllustration: "#5273b5",
} as const;

export const secondaryColors = {
  secondary: "#415d47",
  secondaryLight: "#648f6c",
  secondaryMedium: "#6a9171",
  secondaryPale: "#bfd7bb",
  secondarySurface: "#f6fff3",
} as const;

export const accentColors = {
  accent: "#bd5201",
  accentLight: "#ffecde",
} as const;

export const neutralColors = {
  white: "#ffffff",
  offWhiteWarm: "#fff7f1",
  offWhiteCool: "#fffff9",
  gray100: "#ebebeb",
  gray200: "#d9d9d9",
  gray300: "#cecece",
  gray400: "#cccccc",
  gray500: "#717171",
  gray600: "#6a6a6a",
  gray700: "#434343",
  gray900: "#1e2330",
  black: "#000000",
} as const;

export const fontFamilies = {
  primary: '"Book Antiqua", "Palatino Linotype", Palatino, serif',
  secondary:
    '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  monospace:
    '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
} as const;

export const fontSizes = {
  displayXl: "72px",
  displayLg: "48px",
  displayMd: "40px",
  displaySm: "32px",
  h1: "48px",
  h2: "40px",
  h3: "32px",
  h4: "28px",
  h5: "24px",
  h6: "20px",
  bodyXl: "28px",
  bodyLg: "24px",
  bodyMd: "20px",
  bodyBase: "16px",
  bodySm: "14px",
  caption: "18px",
  label: "16px",
  tiny: "12px",
} as const;

export const spacing = {
  none: "0px",
  xs: "4px",
  sm: "8px",
  md1: "10px",
  md2: "12px",
  md3: "13px",
  md: "16px",
  lg1: "18px",
  lg2: "20px",
  lg: "24px",
  xl1: "28px",
  xl2: "32px",
  xl: "40px",
  "2xl": "80px",
  "3xl": "120px",
} as const;

export const buttonVariants = {
  primaryGreen: {
    background: secondaryColors.secondary,
    color: neutralColors.white,
    borderColor: secondaryColors.secondary,
    borderWidth: "1.5px",
    borderStyle: "dashed",
    borderRadius: "999px",
    padding: `${spacing.md2} ${spacing.lg2}`,
    hover: {
      background: secondaryColors.secondaryLight,
      borderColor: secondaryColors.secondaryLight,
    },
    active: {
      background: neutralColors.gray900,
      borderColor: neutralColors.gray900,
    },
    disabled: {
      background: neutralColors.gray100,
      color: neutralColors.gray200,
      borderColor: neutralColors.gray100,
    },
  },
  primaryBlue: {
    background: primaryColors.primary,
    color: neutralColors.offWhiteCool,
    borderColor: primaryColors.primary,
    borderWidth: "2.4px",
    borderStyle: "dashed",
    borderRadius: "999px",
    padding: `${spacing.md2} ${spacing.xl1}`,
    hover: {
      background: primaryColors.primaryDark,
      borderColor: primaryColors.primaryDark,
    },
    active: {
      background: primaryColors.primaryLight,
      borderColor: primaryColors.primaryLight,
    },
    disabled: {
      background: neutralColors.gray100,
      color: neutralColors.gray200,
      borderColor: neutralColors.gray100,
    },
  },
  tab: {
    background: primaryColors.primaryExtraLight,
    color: neutralColors.gray900,
    borderColor: primaryColors.primaryDark,
    borderWidth: "1.5px",
    borderStyle: "solid",
    borderRadius: "8px",
    padding: `${spacing.md1} ${spacing.md2}`,
    hover: {
      background: primaryColors.primaryPale,
      borderColor: primaryColors.primaryDark,
    },
    active: {
      background: primaryColors.primaryLight,
      borderColor: primaryColors.primaryDark,
    },
    disabled: {
      background: neutralColors.gray100,
      color: neutralColors.gray300,
      borderColor: neutralColors.gray200,
    },
  },
  tabInactive: {
    background: neutralColors.gray100,
    color: neutralColors.gray900,
    borderColor: "transparent",
    borderWidth: "0px",
    borderStyle: "none",
    borderRadius: "8px",
    padding: `${spacing.md1} ${spacing.md2}`,
    hover: {
      background: neutralColors.gray200,
      borderColor: "transparent",
    },
    active: {
      background: neutralColors.gray300,
      borderColor: "transparent",
    },
    disabled: {
      background: neutralColors.gray100,
      color: neutralColors.gray300,
      borderColor: neutralColors.gray100,
    },
  },
} as const;

export type IMUButtonTone = keyof typeof buttonVariants;

export const imuTokens = {
  colors: {
    primary: primaryColors,
    secondary: secondaryColors,
    accent: accentColors,
    neutral: neutralColors,
  },
  typography: {
    fontFamilies,
    fontSizes,
  },
  spacing,
  components: {
    button: buttonVariants,
  },
} as const;

export type IMUThemeTokens = typeof imuTokens;

declare module "@mui/material/styles" {
  interface Theme {
    imu: IMUThemeTokens;
  }

  interface ThemeOptions {
    imu?: IMUThemeTokens;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColors.primary,
      light: primaryColors.primaryLight,
      dark: primaryColors.primaryDark,
      contrastText: neutralColors.white,
    },
    secondary: {
      main: secondaryColors.secondary,
      light: secondaryColors.secondaryLight,
      dark: secondaryColors.secondaryMedium,
      contrastText: neutralColors.white,
    },
    error: {
      main: "#d4183d",
    },
    warning: {
      main: accentColors.accent,
    },
    info: {
      main: primaryColors.primary,
    },
    success: {
      main: secondaryColors.secondary,
    },
    text: {
      primary: neutralColors.gray900,
      secondary: neutralColors.gray500,
    },
    background: {
      default: neutralColors.offWhiteCool,
      paper: neutralColors.white,
    },
  },
  typography: {
    fontFamily: fontFamilies.secondary,
    h1: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.h1,
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h2: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.h2,
      fontWeight: 400,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: fontSizes.bodyBase,
      lineHeight: 1.5,
    },
    button: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.caption,
      fontWeight: 700,
      letterSpacing: "1.8px",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 8,
  },
  imu: imuTokens,
});

export type Theme = typeof theme;

export default theme;
