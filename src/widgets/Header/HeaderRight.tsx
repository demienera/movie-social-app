import { Box } from '@mui/material';
import { UserMenu } from '@/entities/user/ui/UserMenu';
import { ThemeSwitcher } from '@/features/theme/ui/ThemeSwither';

export const HeaderRight = () => (
  <Box sx={{ display: 'flex', gap: '10px' }}>
    <ThemeSwitcher />
    <UserMenu />
  </Box>
);
