import styled, { css } from 'styled-components';

export default styled.a(
  ({ theme }) => css`
    position: relative;
    color: ${theme.palette.primary};
    font-weight: 500;
  `,
);
