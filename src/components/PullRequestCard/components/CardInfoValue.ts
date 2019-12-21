import styled from 'styled-components';

export default styled.dd`
  margin-left: 0;
  width: 100%;
  font-weight: 400;

  &::after {
    content: '';
    clear: left;
  }
`;
