import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string;
    };
    sizes: {
      sm: string;
      md: string;
      nm: string;
      lg: string;
    };
    weigth: {
      regular: string;
      medium: string;
      bold: string;
    };

    darkTheme: {
      background: string;
      lightBlack: string;
      secondary: string;
      lightGray: string;
      gray: string;
    };
  }
}
