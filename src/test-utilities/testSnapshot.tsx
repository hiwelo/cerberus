import { ReactElement } from 'react';
import { renderWithApp } from './renderWithApp';

/**
 * Takes a snapshot of the provided component and check if it is matching the
 * previous one for the same component.
 *
 * @param component Component to test
 * @param snapshotName Specific name for this snapshot
 */
export function testSnapshot(
  component: ReactElement,
  snapshotName?: string,
): void {
  it('should match snapshot', () => {
    const wrapper = renderWithApp(component);

    expect(wrapper).toMatchSnapshot(snapshotName);
  });
}
