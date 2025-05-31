import { ThemeSwitcher } from '@/features/theme/ui/ThemeSwitcher';
import { AuthAvatar } from '@/features/auth/ui/AuthAvatar';
import { Container } from './styled';

export const HeaderUserArea = () => {
  return (
    <Container>
      <ThemeSwitcher />
      <AuthAvatar />
    </Container>
  );
};
