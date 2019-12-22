import styled, { css } from 'styled-components';
import { breakpoints } from 'utilities';

export default styled.button(
  ({ theme }) => css`
    flex: 1;
    padding: 1.2rem 1.6rem;
    background: none;
    border: 0;
    font-size: 1.8rem;
    font-weight: 350;
    transition: font-weight 0.2s linear;
    z-index: 1;

    &:focus {
      outline: none;
    }

    &:hover {
      cursor: pointer;
    }

    &:focus,
    &:hover {
      font-weight: 600;
    }

    &[aria-expanded='true'] {
      font-weight: 600;
    }

    &:first-of-type {
      position: relative;

      &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        display: block;
        content: '';
        background-color: ${theme.palette.tertiary};
        border-radius: 0.6rem;
        box-shadow: 0 0rem 0.2rem rgba(0, 0, 0, 0.1);
        transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.045);
        z-index: -1;
      }

      &[aria-expanded='false']::before {
        transform: translateY(100%);

        @media (min-width: ${breakpoints.md}) {
          transform: translateX(100%);
        }
      }
    }
  `,
);
