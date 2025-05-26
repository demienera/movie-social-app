import { ThemeSwitcher } from '@/features/theme/ui/ThemeSwitcher';
import { OpenAuthButton } from '@/features/auth/ui/OpenAuthButton';
import { Container } from './styled';

export const HeaderUserArea = () => (
  <Container>
    <ThemeSwitcher />
    <OpenAuthButton />
  </Container>
);
