import { useLocation, useRoutes, useNavigate } from 'react-router-dom';
import { mainRoutes, modalRoutes } from './routes';
import { Suspense, useEffect } from 'react';
import { ModalRouteWrapper } from '@/app/router/ModalRouteWrapper';
import { CircularProgress } from '@mui/material';

export const AppRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { backgroundLocation?: Location };
  const backgroundLocation = state?.backgroundLocation;

  const isModalRoute = modalRoutes.some(route => route.path === location.pathname);

  useEffect(() => {
    if (isModalRoute && !backgroundLocation) {
      navigate(location.pathname, {
        state: {
          backgroundLocation: {
            ...location,
            pathname: '/',
          },
        },
        replace: true,
      });
    }
  }, [isModalRoute, backgroundLocation, location, navigate]);

  const mainContent = useRoutes(mainRoutes, backgroundLocation || location);

  return (
    <Suspense fallback={<CircularProgress sx={{ color: '#8b5cf6' }} />}>
      {mainContent}
      {(backgroundLocation || isModalRoute) && <ModalRouteWrapper />}
    </Suspense>
  );
};
