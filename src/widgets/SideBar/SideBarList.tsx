import { List } from '@mui/material';
import { SideBarItem } from './SideBarItem';
import type { SideBarListProp } from './types';

export const SideBarList = ({ items }: SideBarListProp) => (
  <List sx={{ display: 'flex', flexDirection: 'column', gap: '5px', pt: '20px' }}>
    {items.map(item => (
      <SideBarItem key={item.path} label={item.label} path={item.path} icon={item.icon} />
    ))}
  </List>
);
