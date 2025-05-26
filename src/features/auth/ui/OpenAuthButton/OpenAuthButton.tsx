import type { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import { ButtonBase } from '@/shared/ui/Buttons/ButtonBase';

export const OpenAuthButton: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const openModal = () => {
    (document.activeElement as HTMLElement)?.blur();
    navigate('/login', { state: { backgroundLocation: location } });
  };

  return (
    <Tooltip title="Войти в профиль" arrow>
      <ButtonBase onClick={openModal}>Войти</ButtonBase>
    </Tooltip>
  );
};
