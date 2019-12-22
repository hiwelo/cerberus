import { createGlobalStyle, css } from 'styled-components';
import { breakpoints } from '../../../utilities';

export default createGlobalStyle(
  ({ theme }) => css`
    * {
      box-sizing: border-box;
    }

    :root,
    html {
      font-size: 56.25%;

      @media (min-width: ${breakpoints.md}) {
        font-size: 62.5%;
      }
    }

    body {
      margin: 0;
      max-width: 100vw;
      min-height: 100vh;
      padding: 0;
      background-color: ${theme.palette.tertiary};
      box-sizing: border-box;
      color: #222222;
      font-family: 'Fira Code', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 1.6rem;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
  `,
);
