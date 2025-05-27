import { useLocation, useNavigate } from 'react-router-dom';

export const useModalNavigate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (to: string, extraState: Record<string, unknown> = {}) => {
    const background = location.state?.backgroundLocation || location;
    navigate(to, { state: { backgroundLocation: background, ...extraState } });
  };
};
