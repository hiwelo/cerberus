import { useRef } from 'react';
import { TabsProps } from '../types';

/**
 * Creates a series of React Ref for each panel part of the Tabs defined for
 * this `Tabs` component
 *
 * @param tabs The dictionary of Tabs for the related Tabs component
 */
export function createTabRefs(tabs: TabsProps['tabs']): TabsProps['tabs'] {
  // Transforms the TabListDictionary as an array of tabs
  const tabsEntries = Object.entries(tabs);
  const tabsWithRefs: TabsProps['tabs'] = {};

  // Loops over each tab and creates a React Ref for each panel HTMLElement
  tabsEntries.forEach(([tabKey, tabInfo]) => {
    const refPanel = useRef<HTMLDivElement>(null);

    tabsWithRefs[tabKey] = { ...tabInfo, refPanel };
  });

  return tabsWithRefs;
}
