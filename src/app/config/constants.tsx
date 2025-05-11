import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';

export const SIDEBAR_ITEMS = [
  { label: 'Главная', path: '/', icon: <HomeIcon /> },
  { label: 'Лента', path: '/feed', icon: <FeedIcon /> },
  { label: 'Профиль', path: '/profile', icon: <PersonIcon /> },
];

export const SIDEBAR_ITEMS_FOOTER = [
  { label: 'О проекте', path: '/about', icon: <InfoIcon /> },
  { label: 'Поддержка', path: '/support', icon: <HelpIcon /> },
];

export const drawerWidthOpen = 190;
export const drawerWidthClosed = 75;
