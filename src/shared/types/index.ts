export type DrawerStateProps = {
  isOpened: boolean;
  topOffset?: number;
  topOffsetMobile?: number;
  onClose?: () => void;
  toggleDrawer?: () => void;
};
