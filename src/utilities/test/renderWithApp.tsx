import React, { ReactElement } from 'react';
import { render } from 'enzyme';
import { TestProvider } from 'components';

/**
 * Returns the result of Enzyme's `render` method for the requested component
 * wrapped with the `TestProvider` component
 *
 * @param component Component to render through Enzyme
 */
export function renderWithApp(component: ReactElement): Cheerio {
  return render(<TestProvider>{component}</TestProvider>);
}
