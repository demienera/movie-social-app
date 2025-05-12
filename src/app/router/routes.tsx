import { lazy } from 'react';

const HomePage = lazy(() => import('@/pages/Home'));
const ProfilePage = lazy(() => import('@/pages/Profile'));
const LoginPage = lazy(() => import('@/pages/Login'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));
const AboutPage = lazy(() => import('@/pages/About'));
const RegisterPage = lazy(() => import('@/pages/Register'));
const MoviePage = lazy(() => import('@/pages/Movie'));
const SupportPage = lazy(() => import('@/pages/Support'));
const FeedPage = lazy(() => import('@/pages/Feed'));
const ProfileEditPage = lazy(() => import('@/pages/ProfileEdit'));
const SettingsPage = lazy(() => import('@/pages/ProfileSettings'));
const ForgotPasswordPage = lazy(() => import('@/pages/ForgotPassword'));
const ResetPasswordPage = lazy(() => import('@/pages/ResetPassword'));

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/profile', element: <ProfilePage /> },
  { path: '/profile/edit', element: <ProfileEditPage /> },
  { path: '/settings', element: <SettingsPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/forgot', element: <ForgotPasswordPage /> },
  { path: '/reset', element: <ResetPasswordPage /> },
  { path: '/feed', element: <FeedPage /> },
  { path: '/movie/:id', element: <MoviePage /> },
  { path: '/support', element: <SupportPage /> },
  { path: '*', element: <NotFoundPage /> },
];
