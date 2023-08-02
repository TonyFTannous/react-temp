import React from 'react';
import { Outlet } from 'react-router-dom'; //, useNavigation

import TopBar from '@/components/TopBar/TopBar';
import SideBar from '@/components/SideBar/SideBar';
// import LoaderScreen from '@/components/Screen/Loader/LoaderScreen';

import classes from '@/pages/Root/Root.module.css';

const RootLayout: React.FC = () => {
  // const navigation = useNavigation();

  return (
    <div className={classes.container}>
      <SideBar />
      <main className={classes.main}>
        <TopBar />
        <div className={classes.outlet}>
          {/* {navigation.state === 'loading' && <LoaderScreen text="Loading" />} */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
