'use client';
import {useState} from 'react';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import NavigationBar from './NavigationBar/NavigationBar';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const showMenuHandler = () => {
    setShowMenu(true);
  };
  const hideMenuHandler = () => {
    setShowMenu(false);
  };

  return (
    <>
      <NavigationBar showMenuHandler={showMenuHandler} />
      <NavigationMenu hideMenuHandler={hideMenuHandler} showMenu={showMenu} />
    </>
  );
};

export default Navigation;
