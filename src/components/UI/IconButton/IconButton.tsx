import React, { ReactNode } from 'react';
import Button from 'react-bootstrap/Button';

import classes from '@/components/UI/IconButton.module.css';

const IconButton: React.FC<{
  children: ReactNode;
  onClick: () => void;
}> = ({ children, onClick }) => {
  return (
    <Button className={classes.container} onClick={onClick}>
      {children}
    </Button>
  );
};

export default IconButton;
