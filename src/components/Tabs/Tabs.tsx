import React, {
  FunctionComponent,
  MouseEvent,
  useEffect,
  useState,
} from 'react';
import { Container, TabButton, TabList, TabPanel } from './components';
import { TabsProps } from './types';

export const Tabs: FunctionComponent<TabsProps> = ({ tabs }) => {
  const tabList = Object.entries(tabs);
  const [firstTabKey] = tabList[0];
  const [active, setActive] = useState(firstTabKey);

  /** Event callback updating the active tab and moving the focus to it */
  const openTab = (event: MouseEvent<HTMLButtonElement>): void => {
    const sourceElement = event.currentTarget;
    const sourceId = sourceElement.id;

    // updates the active element
    setActive(sourceId);
  };

  /** Moves the focus to the tab content everytime the active element change */
  useEffect(() => {
    const activeElement = document.querySelector<HTMLButtonElement>(
      `#${active}`,
    );
    const controlledTabElement = document.querySelector<HTMLDivElement>(
      `#${activeElement?.getAttribute('aria-controls')}`,
    );

    // early-termination if the activeElement is not yet rendered
    if (!activeElement || !controlledTabElement) return;

    // early-termination if the activeElement is not the currently focused element
    if (document.activeElement !== activeElement) return;

    // moves the focus to the controlled tab
    controlledTabElement?.focus();
  }, [active]);

  return (
    <Container>
      <TabList>
        {tabList.map(([key, tabItem]) => (
          <TabButton
            key={key}
            id={key}
            aria-controls={`${key}-tab`}
            aria-expanded={active === key}
            onClick={openTab}
          >
            {tabItem.label}
          </TabButton>
        ))}
      </TabList>
      {tabList.map(([key, tabItem]) => (
        <TabPanel
          key={key}
          id={`${key}-tab`}
          hidden={active !== key ?? undefined}
          role="region"
          tabIndex={0}
          aria-labelledby={key}
        >
          {tabItem.content}
        </TabPanel>
      ))}
    </Container>
  );
};
