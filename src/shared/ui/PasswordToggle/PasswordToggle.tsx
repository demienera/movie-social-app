import type { FC } from 'react';
import { InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ButtonBase } from '../Buttons';
import type { PasswordToggleProps } from './types';

export const PasswordToggle: FC<PasswordToggleProps> = ({ show, onToggle }) => (
  <InputAdornment position="end">
    <ButtonBase
      onClick={onToggle}
      edge="end"
      aria-label={show ? 'Скрыть пароль' : 'Показать пароль'}
      tabIndex={-1}
      variantType="icon"
    >
      {show ? <VisibilityOff /> : <Visibility />}
    </ButtonBase>
  </InputAdornment>
);
