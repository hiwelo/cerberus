import { ReactElement } from 'react';
import { axe } from 'jest-axe';
import { mountWithApp } from './mountWithApp';

export function testA11y(component: ReactElement): void {
  it('should have no accessibility violations', async () => {
    const result = await axe(mountWithApp(component).html());

    expect(result).toHaveNoViolations();
  });
}
