import styled, { css } from 'styled-components';

export default styled.div(
  ({ theme }) => css`
    margin: 0 auto;
    max-width: 64rem;
    padding: 1.6rem;
    width: 100%;
    background-color: ${theme.palette.muted};
    border-radius: 0.8rem;
  `,
);
