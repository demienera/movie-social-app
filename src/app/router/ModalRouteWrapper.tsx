import { useMemo, type FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { modalRoutes } from '@/app/router/routes';
import { BaseModal } from '@/shared/ui/Modal/Modal';

export const ModalRouteWrapper: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  const modalRoute = useMemo(() => {
    return modalRoutes.find(route => route.path === location.pathname);
  }, [location.pathname]);

  const handleClose = () => {
    if (state?.backgroundLocation) {
      navigate(state.backgroundLocation.pathname);
    } else {
      navigate('/', { replace: true });
    }
  };

  if (!modalRoute) return null;

  return (
    <BaseModal open onClose={handleClose} {...modalRoute.modalProps}>
      {modalRoute.element}
    </BaseModal>
  );
};
