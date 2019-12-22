import styled, { css } from 'styled-components';
import { Link } from 'components/Link';

export default styled(Link)(
  ({ theme }) => css`
    display: inline-block;
    padding: 0.8rem 1.6rem 0.7rem;
    background-color: transparent;
    border: 0.3rem solid ${theme.palette.primary};
    border-radius: 0.8rem;
    color: ${theme.palette.neutral};
    font-weight: 500;
    line-height: 1.2em;
    text-decoration: none;
    text-transform: capitalize;
    transition: background-color 0.3s ease-in-out, color 0.2s ease-in-out;

    &:focus,
    &:hover {
      background-color: ${theme.palette.primary};
      color: ${theme.palette.muted};
    }
  `,
);
