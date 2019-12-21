import styled from 'styled-components';

export default styled.button`
  flex: 1;
  padding: 1.2rem 1.6rem;
  background: none;
  border: 0;
  border-bottom: 0.1rem solid #8ab0ab;
  font-size: 1.8rem;
  font-weight: 350;

  &[aria-expanded='true'] {
    border-bottom-width: 0.3rem;
    font-weight: 650;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: border-width 0.3s ease-in-out, font-weight 0.3s ease-in-out;
  }
`;
