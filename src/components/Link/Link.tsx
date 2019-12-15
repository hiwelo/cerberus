import React, { FunctionComponent, AnchorHTMLAttributes } from 'react';
import { LinkMarkup } from './components';

export const Link: FunctionComponent<AnchorHTMLAttributes<
  HTMLAnchorElement
>> = ({ children, target, ...rest }) => {
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
