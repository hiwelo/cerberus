import React, { FunctionComponent } from 'react';
import { LinkMarkup } from './components';
import { LinkProps } from './types';

export const Link: FunctionComponent<LinkProps> = ({
  children,
  target,
  ...rest
}) => {
  return (
    <LinkMarkup
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      target={target}
      {...rest}
    >
      {children}
    </LinkMarkup>
  );
};
