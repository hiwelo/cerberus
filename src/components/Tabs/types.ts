import { ReactNode, RefObject } from 'react';

/** Defines a tab to display in a Tab list */
type Tab = {
  /** Label of the tab */
  label: string;
  /** Content of the tab */
  content: ReactNode;
  /** React ref for the button */
  refButton?: RefObject<undefined>;
  /** React ref for the tab panel */
  refPanel?: RefObject<undefined>;
};

/** Collection of tabs */
type TabListDictionary = {
  [key: string]: Tab;
};

export interface TabsProps {
  /** Tabs to display in the tab list */
  tabs: TabListDictionary;
}
