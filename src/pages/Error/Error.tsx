import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';

import logo from '@/assets/images/png/logo.png';

import classes from '@/pages/Error/Error.module.css';

const ErrorPage: React.FC = () => {
  const error: any = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error?.status === 500) {
    message =
      error.data?.message ?? (error.statusText || 'Something went wrong!');
  }

  if (error?.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <img alt="logo" className={classes.img} src={logo} />
        <span className={classes.title}>MY PROJECT</span>
      </div>
      <div className={classes.innerContainer}>
        <div className={classes.flash}>Oops</div>
        <h2>{title}</h2>
        <h5>{message}</h5>
        <p
          className={`${classes.goBackContainer} elem-bounce-vertical-2-times`}
        >
          <IoArrowBackOutline />
          <Link to=".." className={classes.goBack}>
            &nbsp;Go Back
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
