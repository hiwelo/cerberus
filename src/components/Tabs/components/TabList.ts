import styled, { css } from 'styled-components';
import { breakpoints } from '../../../utilities';

export default styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 0.4rem;
    border: 0.3rem solid ${theme.palette.tertiary};
    border-radius: 1.2rem;
    box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.1) inset;
    z-index: 0;

    @media (min-width: ${breakpoints.md}) {
      flex-direction: row;
    }
  `,
);
