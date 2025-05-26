import { lazy } from 'react';

const HomePage = lazy(() => import('@/pages/Home'));
const ProfilePage = lazy(() => import('@/pages/Profile'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));
const AboutPage = lazy(() => import('@/pages/About'));
const MoviePage = lazy(() => import('@/pages/Movie'));
const FeedPage = lazy(() => import('@/pages/Feed'));
const ProfileEditPage = lazy(() => import('@/pages/ProfileEdit'));
const SettingsPage = lazy(() => import('@/pages/ProfileSettings'));
const ResetPage = lazy(() => import('@/pages/ResetPage'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));

export const mainRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/new', element: <HomePage /> },
  { path: '/profile', element: <ProfilePage /> },
  { path: '/profile/edit', element: <ProfileEditPage /> },
  { path: '/settings', element: <SettingsPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/feed', element: <FeedPage /> },
  { path: '/movie/:id', element: <MoviePage /> },
  { path: '*', element: <NotFoundPage /> },
];

export const modalRoutes = [
  {
    path: '/login',
    element: <LoginPage />,
    modalProps: {
      title: 'Вход',
      showBack: false,
    },
  },
  {
    path: '/register',
    element: <RegisterPage />,
    modalProps: {
      title: 'Регистрация',
      showBack: false,
    },
  },
  {
    path: '/reset',
    element: <ResetPage />,
    modalProps: {
      title: 'Сбросить пароль',
      showBack: true,
    },
  },
];
