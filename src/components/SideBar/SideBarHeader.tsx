import React from 'react';

import noProfile from '@/assets/images/png/no-profile-picture.png';

import classes from '@/components/SideBar/SideBarHeader.module.css';

const SideBarHeader: React.FC<{
  image?: string;
  userName: string;
  userPosition: string;
}> = ({ image, userName, userPosition }) => {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img
          alt="User Profile"
          className={classes.img}
          // src={image ?? noProfile}
          src={require('../../assets/images/jpeg/user.jpeg')}
          onError={(event: any) => {
            event.target.onerror = null;
            event.target.src = noProfile;
          }}
        />
      </div>
      <div className={classes.infoContainer}>
        <p className={classes.infoUserName}>{userName}</p>
        <p className={classes.infoUserDescription}>{userPosition}</p>
      </div>
    </div>
  );
};

export default SideBarHeader;
