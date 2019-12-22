import React, { FunctionComponent } from 'react';
import { LinkProps } from 'components/Link/types';
import { LinkElement } from './components';

export const StyledLink: FunctionComponent<LinkProps> = ({
  children,
  ...rest
}) => <LinkElement {...rest}>{children}</LinkElement>;
