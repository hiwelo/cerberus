import React, { FunctionComponent } from 'react';
import WebFont from 'webfontloader';
import { FontFaces } from './components';

export const FontLoader: FunctionComponent = () => {
  WebFont.load({
    custom: {
      families: ['Fira Code'],
    },
  });

  return <FontFaces />;
};
