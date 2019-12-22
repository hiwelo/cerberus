import React, { FunctionComponent } from 'react';
import { StyledLink } from '..';
import { FooterContainer } from './components';

/**
 * Provides a footer giving information about the current application
 */
export const Footer: FunctionComponent = () => {
  return (
    <FooterContainer>
      Provided by{' '}
      <StyledLink href="https://github.com/hiwelo/cerberus">
        Cerberus
      </StyledLink>
      , made with love by{' '}
      <StyledLink href="https://github.com/hiwelo">hiwelo</StyledLink> in
      Rotterdam.
    </FooterContainer>
  );
};
