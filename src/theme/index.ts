// The getComputedStyle function allows us to get the final computed value of any
// CSS property,including CSS variables. By passing document.documentElement as an argument to getComputedStyle,
// we are getting the styles applied to the root element (i.e., the <html> element), and therefore we can access
// the global CSS variables defined in :root.

export const generateTheme = (theme: string): CSSStyleDeclaration => {
  const rootDoc = document.documentElement;
  const rootStyles = getComputedStyle(rootDoc);

  if (theme === 'light') {
    //handle the light theme
  } else {
    rootDoc.style.setProperty(
      '--color-sidebar-color',
      rootStyles.getPropertyValue('--color-sidebar-color-dark')
    );
    rootDoc.style.setProperty(
      '--color-sidebar-bg',
      rootStyles.getPropertyValue('--color-sidebar-bg-dark')
    );
    rootDoc.style.setProperty(
      '--color-sidebar-menu-content-even',
      rootStyles.getPropertyValue('--color-sidebar-menu-content-even-dark')
    );
    rootDoc.style.setProperty(
      '--color-sidebar-menu-content-odd',
      rootStyles.getPropertyValue('--color-sidebar-menu-content-odd-dark')
    );
    rootDoc.style.setProperty(
      '--color-sidebar-menu-hover-bg',
      rootStyles.getPropertyValue('--color-sidebar-menu-hover-bg-dark')
    );
    rootDoc.style.setProperty(
      '--color-sidebar-menu-hover-color',
      rootStyles.getPropertyValue('--color-sidebar-menu-hover-color-dark')
    );
    rootDoc.style.setProperty(
      '--color-sidebar-menu-active-bg',
      rootStyles.getPropertyValue('--color-sidebar-menu-active-bg-dark')
    );
    rootDoc.style.setProperty(
      '--color-sidebar-menu-active-color',
      rootStyles.getPropertyValue('--color-sidebar-menu-active-color-dark')
    );
    rootDoc.style.setProperty(
      '--color-sidebar-menu-disabled-color',
      rootStyles.getPropertyValue('--color-sidebar-menu-disabled-color-dark')
    );
    rootDoc.style.setProperty(
      '--color-sidebar-menu-expand-icon-color',
      rootStyles.getPropertyValue('--color-sidebar-menu-expand-icon-color-dark')
    );
    rootDoc.style.setProperty(
      '--color-sidebar-header-user-info-name',
      rootStyles.getPropertyValue('--color-sidebar-header-user-info-name-dark')
    );
    rootDoc.style.setProperty(
      '--color-sidebar-header-user-info-desc',
      rootStyles.getPropertyValue(' --color-sidebar-header-user-info-desc-dark')
    );
    rootDoc.style.setProperty(
      '--color-sidebar-section-title',
      rootStyles.getPropertyValue('--color-sidebar-section-title-dark')
    );
    rootDoc.style.setProperty(
      '--color-sidebar-section-desc',
      rootStyles.getPropertyValue('--color-sidebar-section-desc-dark')
    );
    rootDoc.style.setProperty(
      '--color-sidbar-toggle-title-bg',
      rootStyles.getPropertyValue('--color-sidbar-toggle-title-bg-dark')
    );
    rootDoc.style.setProperty(
      '--color-sidbar-toggle-title-color',
      rootStyles.getPropertyValue('--color-sidbar-toggle-title-color-dark')
    );
    rootDoc.style.setProperty(
      '--color-topbar-color',
      rootStyles.getPropertyValue('--color-topbar-color-dark')
    );
    rootDoc.style.setProperty(
      '--color-topbar-dropdown-arrow',
      rootStyles.getPropertyValue('--color-topbar-dropdown-arrow-dark')
    );
    rootDoc.style.setProperty(
      '--color-card-bg',
      rootStyles.getPropertyValue('--color-card-bg-dark')
    );
    rootDoc.style.setProperty(
      '--color-card-box-shadow',
      rootStyles.getPropertyValue('--color-card-box-shadow-dark')
    );
    rootDoc.style.setProperty(
      '--color-modal-backdrop-bg',
      rootStyles.getPropertyValue('--color-modal-backdrop-bg-dark')
    );
    rootDoc.style.setProperty(
      '--color-modal-bg',
      rootStyles.getPropertyValue('--color-modal-bg-dark')
    );
    rootDoc.style.setProperty(
      '--color-pagecontent-title-color',
      rootStyles.getPropertyValue('--color-pagecontent-title-color-dark')
    );
    rootDoc.style.setProperty(
      '--color-pagecontent-subtitle-color',
      rootStyles.getPropertyValue('--color-pagecontent-subtitle-color-dark')
    );
    rootDoc.style.setProperty(
      '--color-error-innercontainer-color',
      rootStyles.getPropertyValue('--color-error-innercontainer-color-dark')
    );
    rootDoc.style.setProperty(
      ' --color-error-innercontainer-flash-color',
      rootStyles.getPropertyValue(
        ' --color-error-innercontainer-flash-color-dark'
      )
    );
    rootDoc.style.setProperty(
      '--color-text-no-data',
      rootStyles.getPropertyValue('--color-text-no-data-dark')
    );
    rootDoc.style.setProperty(
      '--color-scrollbar-bg',
      rootStyles.getPropertyValue('--color-scrollbar-bg-color-dark')
    );
    rootDoc.style.setProperty(
      '--color-scrollbar-hover-color',
      rootStyles.getPropertyValue('--color-scrollbar-hover-color-dark')
    );
    rootDoc.style.setProperty(
      '--dropdown-link-hover-bg',
      rootStyles.getPropertyValue('--dropdown-link-hover-bg-dark')
    );
    rootDoc.style.setProperty(
      '--dropdown-link-hover-color',
      rootStyles.getPropertyValue('--dropdown-link-hover-color-dark')
    );
    rootDoc.style.setProperty(
      '--dropdown-link-active-bg',
      rootStyles.getPropertyValue('--dropdown-link-active-bg-dark')
    );
    rootDoc.style.setProperty(
      '--nav-link-color',
      rootStyles.getPropertyValue('--nav-link-color-dark')
    );
  }
  return rootStyles;
};
