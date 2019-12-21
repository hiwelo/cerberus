import styled, { css } from 'styled-components';

export default styled.li(
  ({ theme }) => css`
    position: relative;
    margin: 0 3.2rem 3.2rem;
    padding: 0 0 3.2rem;

    &::after {
      position: absolute;
      left: 0;
      right: 0;
      top: calc(100% - 0.2rem);
      content: '';
      display: block;
      height: 0.4rem;
      background: ${theme.palette.secondary};
      border-radius: 0.2rem;
    }
  `,
);
