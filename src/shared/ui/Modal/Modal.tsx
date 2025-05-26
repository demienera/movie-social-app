import type { FC } from 'react';
import { Modal, Typography } from '@mui/material';
import { ModalHeader } from './ModalHeader';
import type { ModalProps } from './types';
import { CustomBackdrop, ModalContent } from './styled';

export const BaseModal: FC<ModalProps> = ({
  open,
  children,
  width = 400,
  height = 'auto',
  title = '',
  showBack = false,
  onClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      disableScrollLock
      disableEnforceFocus
      keepMounted
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby="modal-description"
      slots={{ backdrop: CustomBackdrop }}
      slotProps={{ backdrop: { timeout: 300 } }}
    >
      <ModalContent $width={width} $height={height}>
        <ModalHeader id="modal-title" title={title} showBack={showBack} />
        <Typography id="modal-description" sx={{ display: 'none' }}>
          Модальное окно «{title}».
        </Typography>
        {children}
      </ModalContent>
    </Modal>
  );
};
