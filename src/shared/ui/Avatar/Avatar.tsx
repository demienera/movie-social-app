import type { FC } from 'react';
import { Avatar as MuiAvatar } from '@mui/material';
import type { AvatarProps } from './types';

export const Avatar: FC<AvatarProps> = ({ src, alt, children, size = 'medium', onClick }) => {
  const sizes = {
    small: 32,
    medium: 40,
    large: 56,
  };

  return (
    <MuiAvatar
      src={src}
      alt={alt}
      sx={{
        width: sizes[size],
        height: sizes[size],
      }}
      onClick={onClick}
    >
      {children}
    </MuiAvatar>
  );
};
