import type { FC } from 'react';
import type { AvatarMenuProps } from './types';
import { Menu } from '@mui/material';
import { StyledMenuItem } from './styled';

export const AvatarMenu: FC<AvatarMenuProps> = ({ anchorEl, open, items, onClose, ...props }) => {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose} {...props}>
      {items.map((item, index) => (
        <StyledMenuItem
          key={index}
          onClick={() => {
            item.onClick?.();
            onClose();
          }}
          disabled={item.disabled}
        >
          {item.content}
        </StyledMenuItem>
      ))}
    </Menu>
  );
};
