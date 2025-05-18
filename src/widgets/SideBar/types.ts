import type { ReactNode } from 'react';

export type SideBarItemProps = {
  label: string;
  path: string;
  icon: ReactNode;
  onClose?: () => void;
};

export type SideBarListProp = {
  items: SideBarItemProps[];
  onClose?: () => void;
};

export type SideBarContextProp = {
  isOpened: boolean;
};
