import React, { ReactNode } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import logo from '@/assets/images/png/logo.png';

import classes from '@/components/Screen/Loader/LoaderScreen.module.css';

const LoaderScreen: React.FC<{ text?: string; children?: ReactNode }> = ({
  text,
  children
}) => {
  let content: React.ReactNode = (
    <div>
      {!text && <img alt="logo" className={classes.img} src={logo} />}
      {text && <p className={classes.text}>{text}</p>}
      <div className={classes.spinnerContainer}>
        <Spinner animation="grow" size="sm" className={classes.spinner} />
        <Spinner animation="grow" size="sm" className={classes.spinner} />
        <Spinner animation="grow" size="sm" className={classes.spinner} />
        <Spinner animation="grow" size="sm" className={classes.spinner} />
      </div>
    </div>
  );

  if (children) {
    content = children;
  }

  return (
    <div className={`${classes.container} ${text && classes.textContainer}`}>
      {content}
    </div>
  );
};

export default LoaderScreen;
