import type { FC } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavigationButton } from '../NavigationButton/NavigationButton';

export const BackButton: FC = () => {
  return <NavigationButton navType="back" icon={<ArrowBackIcon />} />;
};
