import styled, { css } from 'styled-components';

export default styled.div(
  ({ theme }) => css`
    display: flex;
    padding: 0.4rem;
    border: 0.3rem solid ${theme.palette.tertiary};
    border-radius: 1.2rem;
    box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.1) inset;
    z-index: 0;
  `,
);
