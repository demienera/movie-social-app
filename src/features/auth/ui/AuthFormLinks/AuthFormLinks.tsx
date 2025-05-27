import type { FC } from 'react';
import { useModalNavigate } from '@/shared/hooks/useModalNavigate';
import { PromptLink } from '@/shared/ui/PromptLink';
import type { AuthFormLinksProps } from './types';
import { LinkBox } from './styled';

export const AuthFormLinks: FC<AuthFormLinksProps> = ({ variant }) => {
  const isLogin = variant === 'login';
  const modalNavigate = useModalNavigate();

  const handleClick = () => {
    modalNavigate(isLogin ? '/register' : '/login');
  };

  const handleClickModalReset = () => {
    modalNavigate('/reset-password');
  };
  return (
    <LinkBox>
      <PromptLink
        text={isLogin ? 'Нет аккаунта?' : 'Уже зарегистрированы?'}
        linkText={isLogin ? 'Зарегистрироваться' : 'Войти'}
        onClick={handleClick}
      />
      {isLogin && (
        <PromptLink
          text="Забыли пароль?"
          linkText="Восстановить пароль"
          onClick={handleClickModalReset}
        />
      )}
    </LinkBox>
  );
};
