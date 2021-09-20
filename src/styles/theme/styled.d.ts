import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        light: string;
        main: string;
        dark: string;
        inverse: string;
      };
      secondary: {
        light: string;
        main: string;
        dark: string;
        inverse: string;
      };

      black: {
        light: string;
        main: string;
        dark: string;
        inverse: string;
      },
      white: {
        light: string;
        main: string;
        dark: string;
        inverse: string;
      },

      disabled: {
        light: string;
        main: string;
        dark: string;
        inverse: string;
      },

      alertSuccess: {
        main: string;
        text: string;
      },
      alertDanger: {
        main: string;
        text: string;
      },
      alertWarning: {
        main: string;
        text: string;
      },
      alertInfo: {
        main: string;
        text: string;
      },
    },
  }
}
