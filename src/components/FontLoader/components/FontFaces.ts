import { createGlobalStyle } from 'styled-components';
import { FiraCodeVariableTrueType, FiraCodeVariableWoff2 } from 'fonts';

export default createGlobalStyle`
  @font-face {
    font-family: 'Fira Code';
    font-weight: 100 900;
    src: url(${FiraCodeVariableWoff2}) format('woff2-variations'),
      url(${FiraCodeVariableTrueType}) format('truetype');
  }
`;
