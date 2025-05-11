import { useState } from 'react';
import { Outlet } from 'react-router';
import { Header } from '@widgets/Header';
import { SideBar } from '@/widgets/SideBar';
import Box from '@mui/material/Box';

export const Layout = () => {
  const [isOpened, setIsOpened] = useState(true);
  const toggleDrawer = () => {
    setIsOpened(prev => !prev);
  };

  return (
    <>
      <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
      <Box sx={{ display: 'flex' }}>
        <SideBar isOpened={isOpened} />
        <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
