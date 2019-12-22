import styled, { css } from 'styled-components';

export default styled.div(
  ({ theme }) => css`
    margin: 0 auto auto;
    max-width: 64rem;
    padding: 1.6rem 2.4rem;
    width: 100%;
    background-color: ${theme.palette.muted};
    border-radius: 0.8rem;
    box-shadow: 0 0.4rem 1.6rem rgba(0, 0, 0, 0.15);
  `,
);
