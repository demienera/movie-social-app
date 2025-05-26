export interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  title?: string;
  showBack?: boolean;
  onClose: () => void;
}
