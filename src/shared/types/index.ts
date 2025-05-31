export type DrawerStateProps = {
  isOpened: boolean;
  topOffset?: number;
  topOffsetMobile?: number;
  onClose?: () => void;
  toggleDrawer?: () => void;
};

export type ApiError = {
  status: number;
  data: {
    message: string;
    errors?: Record<string, string>;
  };
};
