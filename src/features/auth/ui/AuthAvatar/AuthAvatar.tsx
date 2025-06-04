import type { FC } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { UserDropdown } from '../UserDropdown';
import { OpenAuthButton } from '../OpenAuthButton';

export const AuthAvatar: FC = () => {
  const { isAuth } = useAuth();

  return isAuth ? <UserDropdown /> : <OpenAuthButton />;
};
