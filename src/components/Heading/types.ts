import { HTMLAttributes } from 'react';

/** Possible markup overrides for the Heading tag component */
export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Specify the tag to use for this heading   */
  tag?: HeadingTag;
}
