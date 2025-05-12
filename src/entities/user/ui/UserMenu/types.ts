import type { MouseEvent } from 'react';

export type UserMenuProps = {
  anchorElUser: HTMLElement | null;
  handleOpenUserMenu: (event: MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
};
