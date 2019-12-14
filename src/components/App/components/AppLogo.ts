import styled from 'styled-components';
import { LogoSpin } from '../animations';

export default styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${LogoSpin} infinite 20s linear;
  }
`;
