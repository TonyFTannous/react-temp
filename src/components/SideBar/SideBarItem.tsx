import React, { ReactNode, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from 'react-pro-sidebar';

const SideBarItem: React.FC<{
  title: string;
  to: string;
  icon?: ReactNode;
  selected: string;
  disabled?: boolean;
  collapsed?: boolean;
  selectHandler: (title: string) => void;
}> = ({ title, to, icon, selected, selectHandler, disabled, collapsed }) => {
  const onClickHandler = useCallback(() => {
    selectHandler(title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let component = <div />;

  if (!disabled) {
    component = <Link to={to} />;
  }

  return (
    <MenuItem
      active={selected.toUpperCase() === title.toUpperCase()}
      onClick={onClickHandler}
      icon={icon}
      disabled={disabled}
      component={component}
      className={`${collapsed ? 'sidebar-collapsed' : ''}`}
    >
      {title}
    </MenuItem>
  );
};

export default SideBarItem;
