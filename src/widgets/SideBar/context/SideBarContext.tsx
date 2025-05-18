import { createContext, useContext } from 'react';
import type { SideBarContextProp } from '../types';

export const SideBarContext = createContext<SideBarContextProp | null>(null);

export const useSideBar = () => {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error('useSideBar must be used within a SideBarContext.Provider');
  }
  return context;
};
