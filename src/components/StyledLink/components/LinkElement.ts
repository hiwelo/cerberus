import styled, { css } from 'styled-components';
import { Link } from '../../Link';

export default styled(Link)(
  ({ theme }) => css`
    position: relative;
    color: ${theme.palette.neutral};
    text-decoration: none;

    &::before {
      position: absolute;
      bottom: 0.1rem;
      left: 0;
      right: 0;
      content: '';
      height: 0.3rem;
      background-color: ${theme.palette.secondary};
      border-radius: 0.4rem;
    }

    &:focus {
      outline: none;
    }

    &:focus,
    &:hover {
      &::before {
        background-color: ${theme.palette.tertiary};
        bottom: 0rem;
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      &::before {
        transition: background-color 0.2s ease-in-out, bottom 0.1s ease-in-out;
      }
    }
  `,
);
