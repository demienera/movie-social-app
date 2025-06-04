import type { ReactNode } from 'react';

export type AvatarProps = {
  src?: string;
  alt?: string;
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
};
