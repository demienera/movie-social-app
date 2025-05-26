import type { ElementType } from 'react';

export interface ModalHeaderProps {
  title: string;
  id?: string;
  showBack?: boolean;
}

export interface ModalTitleProps {
  children: React.ReactNode;
  component?: ElementType;
}
