// Definição de tipos globais.
import 'styled-components';

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      primarySecond: string;
      shadow: string;

      transparentBckg: string;
      transparentBckgSec: string;

      textSecondary: string;
      textShadow: string;

      submit: string;
      warning: string;
    };
  }
}
