import { useLocation, useNavigate } from 'react-router-dom';

type NavType = 'back' | 'close' | 'navigate';

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  const navigateByType = (navType: NavType, to?: string) => {
    switch (navType) {
      case 'back':
        navigate(-1);
        break;
      case 'close':
        navigate(state?.backgroundLocation?.pathname || '/');
        break;
      case 'navigate':
        if (to) {
          navigate(to, { state: { backgroundLocation: location } });
        }
        break;
      default:
        break;
    }
  };

  return { navigateByType };
};
