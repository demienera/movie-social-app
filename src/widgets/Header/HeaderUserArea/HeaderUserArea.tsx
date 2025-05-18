import { ThemeSwitcher } from '@/features/theme/ui/ThemeSwitcher';
import { AuthButton } from '@/features/auth/ui/AuthButton';
import { Container } from './styled';

export const HeaderUserArea = () => (
  <Container>
    <ThemeSwitcher />
    <AuthButton />
  </Container>
);
