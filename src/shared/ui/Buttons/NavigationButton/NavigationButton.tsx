import type { FC } from 'react';
import type { NavigationButtonProps } from './types';
import { Tooltip } from '@mui/material';
import { useNavigation } from '@/shared/hooks/useNavigation';
import { ButtonBase } from '../ButtonBase';

export const NavigationButton: FC<NavigationButtonProps> = ({
  navType,
  tooltip,
  to = '/',
  icon,
  ...props
}) => {
  const { navigateByType } = useNavigation();

  const handleClick = () => {
    navigateByType(navType, to);
  };

  const button = (
    <ButtonBase variantType="icon" onClick={handleClick} {...props}>
      {icon}
    </ButtonBase>
  );

  return tooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button;
};
