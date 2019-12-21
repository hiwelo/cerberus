import React, { ReactElement } from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { TestProvider } from '../components';

/**
 * Returns the result of Enzyme's `mount` method for the requested component
 * wrapped with the `TestProvider` component
 *
 * @param component Component to mount through Enzyme
 */
export function mountWithApp(component: ReactElement): ReactWrapper {
  return mount(<TestProvider>{component}</TestProvider>);
}
