import styled, { css } from 'styled-components';

export default styled.li(
  ({ theme }) => css`
    position: relative;
    margin: 0 1.6rem 3.2rem;
    padding: 0 0 1.6rem;

    &:last-of-type {
      margin-bottom: 0;
    }

    &:not(:last-of-type)::after {
      position: absolute;
      left: 0;
      right: 0;
      top: calc(100% - 0.2rem);
      content: '';
      display: block;
      height: 0.4rem;
      background: ${theme.palette.tertiary};
      border-radius: 0.2rem;
    }
  `,
);
