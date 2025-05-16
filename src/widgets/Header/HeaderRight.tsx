import { Box } from '@mui/material';
import { ThemeSwitcher } from '@/features/theme/ui/ThemeSwither';
import { AuthButton } from '@/features/auth/ui/AuthButton';

export const HeaderRight = () => (
  <Box sx={{ display: 'flex', gap: '10px' }}>
    <ThemeSwitcher />
    <AuthButton />
  </Box>
);
