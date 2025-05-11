import type { ReactNode } from 'react';

export type SideBarItemProps = {
  label: string;
  path: string;
  icon: ReactNode;
};

export type SideBarListProp = {
  items: SideBarItemProps[];
};

export type SideBarContextProp = {
  isOpened: boolean;
};
