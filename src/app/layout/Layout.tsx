import { useState } from 'react';
import { Header } from '@widgets/Header';
import { SideBar } from '@/widgets/SideBar';
import { AppRouter } from '../router/AppRouter';
import { LayoutWrapper, MainContent } from './styled';

export const Layout = () => {
  const [isOpened, setIsOpened] = useState(true);
  const toggleDrawer = () => {
    setIsOpened(prev => !prev);
  };

  const handleClose = () => {
    setIsOpened(false);
  };
  return (
    <>
      <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
      <LayoutWrapper>
        <SideBar isOpened={isOpened} onClose={handleClose} />
        <MainContent>
          <AppRouter />
        </MainContent>
      </LayoutWrapper>
    </>
  );
};
