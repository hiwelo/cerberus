import styled, { css } from 'styled-components';

export default styled.a(
  ({ theme }) => css`
    color: ${theme.palette.primary};
  `,
);
