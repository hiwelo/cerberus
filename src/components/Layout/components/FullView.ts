import styled, { css } from 'styled-components';

export default styled.div(
  ({ theme }) => css`
    display: flex;
    min-height: 100vh;
    padding: 8vh;
    width: 100vw;
    background-color: ${theme.palette.tertiary};
    box-sizing: border-box;
  `,
);
