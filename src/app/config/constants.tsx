import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';

export const SIDEBAR_ITEMS = [
  { label: 'Главная', path: '/', icon: <HomeIcon /> },
  { label: 'Лента', path: '/feed', icon: <FeedIcon /> },
  { label: 'Профиль', path: '/profile', icon: <PersonIcon /> },
];

export const SIDEBAR_ITEMS_FOOTER = [{ label: 'О проекте', path: '/about', icon: <InfoIcon /> }];

export const drawerWidthOpen = 220;
export const drawerWidthClosed = 75;
