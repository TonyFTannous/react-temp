import React from 'react';

import classes from '@/components/SideBar/SideBarSection.module.css';

const SideBarSection: React.FC<{
  title: string;
  description?: string;
  collapsed?: boolean;
}> = ({ title, description, collapsed }) => {
  return (
    <div className={classes.titleContainer}>
      <div
        className={`${classes.title} ${collapsed && classes.titleCollapsed}`}
      >
        {title}
      </div>
      {!collapsed && description && (
        <div className={classes.description}>{description}</div>
      )}
    </div>
  );
};

export default SideBarSection;
