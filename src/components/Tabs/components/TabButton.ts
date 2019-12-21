import styled, { css } from 'styled-components';

export default styled.button(
  ({ theme }) => css`
    position: relative;
    flex: 1;
    padding: 1.2rem 1.6rem;
    background: none;
    border: 0;
    border-bottom: 0.1rem solid ${theme.palette.primary};
    font-size: 1.8rem;
    font-weight: 350;

    &:focus {
      outline: none;
    }

    &:hover {
      cursor: pointer;
    }

    &:focus,
    &:hover {
      font-weight: 650;
    }

    &::after {
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      content: '';
      height: 0.1rem;
      background: ${theme.palette.primary};
    }

    &[aria-expanded='true'] {
      font-weight: 650;

      &::after {
        height: 0.3rem;
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      transition: font-weight 0.3s ease-in-out;

      &::after {
        transition: height 0.3s ease-in-out;
      }
    }
  `,
);
