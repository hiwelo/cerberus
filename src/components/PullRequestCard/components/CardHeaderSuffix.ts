import styled, { css } from 'styled-components';

export default styled.span(
  ({ theme }) => css`
    margin-left: 0.35em;
    color: ${theme.palette.neutral};
    font-weight: 350;
  `,
);
