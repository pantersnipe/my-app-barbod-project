import { createTheme, ThemeProvider } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { commonColors, darkColor, LightColor } from './colors';

const CustomThemeProvider = (props: PropsWithChildren<{}>) => {
  const darkMode = false;
  const theme = createTheme({
    palette: {
      primary: {
        main: commonColors.primary,
      },
  
    },
    background: darkMode ? darkColor.background : LightColor.background,
    font:darkMode ?darkColor.font :LightColor.font,
    commonColors
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

declare module '@mui/material/styles'{
    interface Theme {
        background:string,
        font:string,
        commonColors:{[key:string]:string}
    }
    interface ThemeOptions {
        background:string,
        font:string,
        commonColors:{[key:string]:string}
    }
}

export default CustomThemeProvider;
