import FeedIcon from '@mui/icons-material/Feed';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const SIDEBAR_ITEMS = [
  { label: 'Новое', path: '/new', icon: <AccessTimeIcon /> },
  { label: 'Моя лента', path: '/feed', icon: <FeedIcon /> },
  { label: 'Профиль', path: '/profile', icon: <PersonIcon /> },
];

export const SIDEBAR_ITEMS_FOOTER = [{ label: 'О проекте', path: '/about', icon: <InfoIcon /> }];

export const drawerWidthOpen = 250;
export const drawerWidthClosed = 0;
export const headerHeight = 64;
