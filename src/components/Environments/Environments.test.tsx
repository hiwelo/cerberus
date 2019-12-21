import React from 'react';
import { render } from 'enzyme';
import { TestProvider } from '..';
import { Environments } from '.';
import { mockedPullRequest } from '../../mocks';

describe('Environments component', () => {
  it('should match the latest snapshot', () => {
    const test = render(
      <TestProvider>
        <Environments pullRequest={mockedPullRequest} />
      </TestProvider>,
    );

    expect(test).toMatchSnapshot();
  });
});
