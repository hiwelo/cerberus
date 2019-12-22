import styled, { css } from 'styled-components';
import { LinkElement } from 'components/StyledLink/components';

export default styled.footer(
  ({ theme }) => css`
    margin: 1.6rem auto 0.8rem;
    padding: 0 1.6rem;
    font-size: 1rem;

    & ${LinkElement} {
      color: ${theme.palette.neutral};

      &::before {
        background-color: currentColor;
        height: 0.1em;
      }
    }
  `,
);
