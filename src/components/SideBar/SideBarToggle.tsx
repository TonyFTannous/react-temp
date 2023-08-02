import React from 'react';
import { MenuItem } from 'react-pro-sidebar';
import { FaAlignJustify } from 'react-icons/fa6';

import logo from '@/assets/images/png/logo.png';

import classes from '@/components/SideBar/SideBarToggle.module.css';

const SideBarToggle: React.FC<{
  collapsed: boolean;
  toggleHandler: () => void;
}> = ({ collapsed, toggleHandler }) => {
  return (
    <div className={classes.toggleContainer}>
      <MenuItem
        onClick={toggleHandler}
        icon={
          collapsed ? (
            <FaAlignJustify
              className={`elem-bounce-hover  ${classes.icon} ${classes.iconCollapse}`}
            />
          ) : null
        }
        className={`sidebar-no-hover ${classes.menuitem}`}
      >
        {!collapsed && (
          <div className={classes.innerContainer}>
            <div className={classes.titleContainer}>
              <img alt="logo" className={classes.img} src={logo} />
              <div className={classes.title}>My Project</div>
            </div>
            <div className={classes.iconContainer}>
              <FaAlignJustify
                className={`sidebar-no-hover elem-bounce-hover  ${classes.icon}`}
              />
            </div>
          </div>
        )}
      </MenuItem>
    </div>
  );
};

export default SideBarToggle;
