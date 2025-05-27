import type { FC } from 'react';
import { ResetRequestForm } from '../ResetRequestForm';
import { useModalNavigate } from '@/shared/hooks/useModalNavigate';

export const ResetRequestModal: FC = () => {
  const modalNavigate = useModalNavigate();

  const handleSuccess = (email: string) => {
    modalNavigate('/reset-password/confirm', { email });
  };

  return <ResetRequestForm onSuccess={handleSuccess} />;
};
