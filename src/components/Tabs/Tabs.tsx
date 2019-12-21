import React, { FunctionComponent, useEffect, useState } from 'react';
import { Container, TabButton, TabList, TabPanel } from './components';
import { Tab, TabsProps } from './types';
import { createTabRefs } from './utilities';

/**
 * Provides a system of tabs matching the information provided as props
 */
export const Tabs: FunctionComponent<TabsProps> = ({ tabs }) => {
  /** Enriched list of tabs with a React Ref for its panel */
  const tabListWithRefs = createTabRefs(tabs);
  /** List of tabs to display (each tab is an array with first the key, and then an object with props) */
  const tabList = Object.entries(tabListWithRefs);
  /** Identifies the first tab for this component */
  const firstTab = tabList[0][1];
  // State keeping track of the active panel
  const [activePanel, setActivePanel] = useState<Tab['refPanel']>(
    firstTab.refPanel,
  );

  /** Moves the focus to the tab content everytime the active element change */
  useEffect(() => {
    const panelElement = activePanel?.current;

    // early-termination if the active panel is not rendered yet
    if (!panelElement) return;

    // moves the focus to the active tab panel
    panelElement.focus();

    // adds a blur event to remove the tabIndex from the DOM element
    panelElement.addEventListener('blur', (): void => {
      panelElement.removeAttribute('tabindex');
    });
  }, [activePanel]);

  return (
    <Container>
      <TabList>
        {tabList.map(([key, tabItem]) => (
          <TabButton
            key={key}
            id={key}
            aria-controls={`${key}-tab`}
            aria-expanded={activePanel === tabItem.refPanel}
            onClick={(): void => {
              setActivePanel(tabItem.refPanel);
            }}
          >
            {tabItem.label}
          </TabButton>
        ))}
      </TabList>
      {tabList.map(([key, tabItem]) => (
        <TabPanel
          key={key}
          ref={tabItem.refPanel}
          id={`${key}-tab`}
          hidden={activePanel !== tabItem.refPanel ?? undefined}
          role="region"
          tabIndex={activePanel === tabItem.refPanel ? 0 : undefined}
          aria-labelledby={key}
        >
          {tabItem.content}
        </TabPanel>
      ))}
    </Container>
  );
};
