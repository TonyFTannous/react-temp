import React from 'react';

import classes from '@/components/UI/Badge/Badge.module.css';

const Badge: React.FC<{
  className?: string;
  children?: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'danger';
}> = ({ className, children, variant = 'info' }) => {
  let variantClass: string;

  switch (variant) {
    case 'success':
      variantClass = classes.success;
      break;
    case 'warning':
      variantClass = classes.warning;
      break;
    case 'danger':
      variantClass = classes.danger;
      break;
    default:
      variantClass = classes.info;
  }

  return (
    <div
      className={`${classes.container} ${classes.shapeRounded} ${variantClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
