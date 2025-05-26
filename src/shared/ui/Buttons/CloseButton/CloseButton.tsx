import type { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { NavigationButton } from '../NavigationButton/NavigationButton';

export const CloseButton: FC = () => {
  return <NavigationButton navType="close" icon={<CloseIcon />} />;
};
