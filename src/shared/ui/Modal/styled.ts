import { Backdrop, Box, styled } from '@mui/material';
import bg from '@shared/assets/modal-bg.jpg';

interface ModalSizeProps {
  $width?: string | number;
  $height?: string | number;
}

export const ModalContent = styled(Box, {
  shouldForwardProp: prop => prop !== '$width' && prop !== '$height',
})<ModalSizeProps>(({ $width, $height, theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.default,
  borderRadius: '8px',
  boxShadow:
    '0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)',
  padding: '12px 10px 35px',
  maxHeight: '90vh',
  width: $width || 400,
  height: $height || 'auto',
  overflowY: 'auto',
  zIndex: 1300,
}));

export const CustomBackdrop = styled(Backdrop)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});
