import React, { useCallback, useRef, useState } from 'react';
import {
  Sidebar,
  Menu,
  SubMenu,
  menuClasses,
  MenuItemStyles
} from 'react-pro-sidebar';

import SideBarItem from '@/components/SideBar/SideBarItem';
import SidebarHeader from '@/components/SideBar/SideBarHeader';
import SideBarToggle from '@/components/SideBar/SideBarToggle';
import SideBarSection from '@/components/SideBar/SideBarSection';

import { generateTheme } from '@/theme';
import sidebarInit, { Telem } from '@/components/SideBar/init';

import classes from '@/components/SideBar/SideBar.module.css';

const SideBar: React.FC = () => {
  const theme = useRef<CSSStyleDeclaration>(generateTheme('dark'));

  const [toggled, setToggled] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('Project');
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: '0.87rem',
      [`&.${menuClasses.menuItemRoot}:not(.sidebar-no-hover):not(.sidebar-collapsed)`]:
        {
          padding: '0.1rem 0.55rem'
        },
      [`&.${menuClasses.menuItemRoot}:not(.sidebar-no-hover).sidebar-collapsed`]:
        {
          paddingTop: '0.1rem'
        },
      [`&.${menuClasses.menuItemRoot}:not(.sidebar-no-hover) .${menuClasses.button}:hover`]:
        {
          color: theme.current.getPropertyValue(
            '--color-sidebar-menu-hover-color'
          ),
          backgroundColor: theme.current.getPropertyValue(
            '--color-sidebar-menu-hover-bg'
          )
        },
      [`&.${menuClasses.menuItemRoot}:not(.sidebar-no-hover) .${menuClasses.button}.${menuClasses.active}`]:
        {
          color: theme.current.getPropertyValue(
            '--color-sidebar-menu-active-color'
          ),
          backgroundColor: theme.current.getPropertyValue(
            '--color-sidebar-menu-active-bg'
          )
        },
      [`&.${menuClasses.menuItemRoot}:not(.sidebar-no-hover):not(.sidebar-collapsed) .${menuClasses.button}:hover,
        &.${menuClasses.menuItemRoot}:not(.sidebar-no-hover):not(.sidebar-collapsed) .${menuClasses.button}.${menuClasses.active}`]:
        {
          borderRadius: '0.4rem'
        },
      [`&.${menuClasses.subMenuRoot}:not(.sidebar-collapsed):not(.ps-open):has(.${menuClasses.button}.ps-active) > .${menuClasses.button}`]:
        {
          borderRadius: '0.4rem',
          color: theme.current.getPropertyValue(
            '--color-sidebar-menu-active-color'
          ),
          backgroundColor: theme.current.getPropertyValue(
            '--color-sidebar-menu-active-bg'
          )
        },
      [`&.${menuClasses.subMenuRoot}:not(.ps-open).sidebar-collapsed:has(.${menuClasses.button}.ps-active)`]:
        {
          color: theme.current.getPropertyValue(
            '--color-sidebar-menu-active-color'
          ),
          backgroundColor: theme.current.getPropertyValue(
            '--color-sidebar-menu-active-bg'
          )
        },
      [`&.${menuClasses.subMenuRoot}.sidebar-collapsed:has(.${menuClasses.button}) .${menuClasses.button}:hover, 
        &.${menuClasses.subMenuRoot}.sidebar-collapsed:has(.${menuClasses.button}.ps-active) .${menuClasses.button}.${menuClasses.active}`]:
        {
          borderRadius: 0
        }
    },
    icon: {
      [`&.${menuClasses.disabled}`]: {
        color: theme.current.getPropertyValue(
          '--color-sidebar-menu-disabled-color'
        )
      }
    },
    SubMenuExpandIcon: {
      color: theme.current.getPropertyValue(
        '--color-sidebar-menu-expand-icon-color'
      ),
      [`& span`]: {
        width: '0.375rem',
        height: '0.375rem'
      }
    },
    subMenuContent: ({ level }) => ({
      borderRadius: '0.3rem',
      paddingTop: '0.2rem',
      paddingBottom: '0.2rem',
      marginTop: '0.2rem',
      backgroundColor:
        level % 2 === 0
          ? theme.current.getPropertyValue('--color-sidebar-menu-content-even')
          : theme.current.getPropertyValue('--color-sidebar-menu-content-odd'),
      [`& .${menuClasses.button}`]: {
        paddingLeft: '3.7rem !important'
      }
    }),
    button: {
      // [`&.${menuClasses.disabled}`]: {
      //   color: theme.menu.disabled.color
      // },
      // [`&.${menuClasses.active}`]: {
      //   color: theme.menu.active.color,
      //   backgroundColor: theme.menu.active.backgroundColor
      // },
      [`&:hover`]: {
        // '& span.ps-menu-icon': {
        //   color: theme.menu.hover.color
        // },
        backgroundColor: 'transparent'
      }
    },
    label: ({ open, disabled, active }) => ({
      color: disabled
        ? theme.current.getPropertyValue('--color-sidebar-menu-disabled-color')
        : 'inherit',
      fontWeight: open ? 700 : 500
    })
  };

  const handleBackDropClick = useCallback(() => setToggled(false), []);

  const handleSelectMenuItem = useCallback((title: string) => {
    setSelected(title);
  }, []);

  const handleSideBarToggle = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const handleGenerateSideBar = useCallback(
    (data: Telem[]) => {
      return data.map((elem: Telem) => {
        switch (elem.type) {
          case 'item':
            return (
              <SideBarItem
                key={elem.title}
                title={elem.title}
                to={elem.to ?? '/'}
                disabled={elem.disabled}
                icon={
                  elem.icon && (
                    <elem.icon size={'1.2rem'} className={classes.icon} />
                  )
                }
                selected={selected}
                selectHandler={handleSelectMenuItem}
                collapsed={isCollapsed}
              />
            );
          case 'section':
            return (
              <SideBarSection
                key={elem.title}
                title={elem.title}
                description={elem.description}
                collapsed={isCollapsed}
              />
            );
          case 'submenu':
            return (
              <SubMenu
                key={elem.title}
                label={elem.title}
                disabled={elem.disabled}
                icon={
                  elem.icon && (
                    <elem.icon size={'1.2rem'} className={classes.icon} />
                  )
                }
                suffix={
                  elem.suffix &&
                  elem.suffix.data > 0 && (
                    <elem.suffix.node variant={elem.suffix.variant}>
                      {elem.suffix.data}
                    </elem.suffix.node>
                  )
                }
                className={`${isCollapsed ? 'sidebar-collapsed' : ''}`}
              >
                {elem.children && handleGenerateSideBar(elem.children)}
              </SubMenu>
            );
          default:
            return null;
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isCollapsed, selected]
  );

  return (
    <Sidebar
      width="17.5rem"
      toggled={toggled}
      collapsed={isCollapsed}
      onBackdropClick={handleBackDropClick}
      backgroundColor={theme.current.getPropertyValue('--color-sidebar-bg')}
      rootStyles={{
        border: 'none',
        height: '100vh',
        paddingRight: '0.05rem',
        color: theme.current.getPropertyValue('--color-sidebar-color'),
        backgroundColor: theme.current.getPropertyValue('--color-sidebar-bg')
      }}
      className={classes.sideBar}
    >
      <div className={classes.innercontainer}>
        <Menu menuItemStyles={menuItemStyles}>
          <SideBarToggle
            collapsed={isCollapsed}
            toggleHandler={handleSideBarToggle}
          />
          {!isCollapsed && (
            <SidebarHeader
              userName="Tony Tannous"
              userPosition="tony.tannous@accuv.com"
            />
          )}
          <div className={classes.elemBounceHover}>
            {handleGenerateSideBar(sidebarInit)}
          </div>
        </Menu>
      </div>
    </Sidebar>
  );
};

export default SideBar;
