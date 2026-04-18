import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  type Theme as MuiTheme,
} from "@mui/material/styles";
import type { ReactNode } from "react";
import defaultTheme from "./theme";

type ThemeProviderProps = {
  children: ReactNode;
  value?: MuiTheme;
};

export function ThemeProvider({ children, value }: ThemeProviderProps) {
  const activeTheme = value ?? defaultTheme;

  return (
    <MuiThemeProvider theme={activeTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
