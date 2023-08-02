import React from 'react';
import { FaHouse } from 'react-icons/fa6';
import { Link, Params, useMatches } from 'react-router-dom';
import { Breadcrumb as RbBreadcrumb } from 'react-bootstrap';

import classes from '@/components/Breadcrumb/Breadcrumb.module.css';

type Tmatch = {
  id: string;
  pathname: string;
  params: Params<string>;
  data: any;
  handle: any;
};

const Breadcrumb: React.FC = () => {
  const matches = useMatches();

  let crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match: Tmatch) => Boolean(match.handle?.crumb));

  // // now map them into an array of elements, passing the loader data to each one
  //.map((match: Tmatch) => match.handle.crumb(match.data));

  return (
    <RbBreadcrumb>
      <RbBreadcrumb.Item linkAs="div">
        <Link to="/" className={classes.home}>
          <FaHouse color="#5490d6" size="1.1rem" />
        </Link>
      </RbBreadcrumb.Item>
      {crumbs.map((match: Tmatch, index: number) => {
        const isActive = match.pathname === window.location.pathname;
        return (
          <RbBreadcrumb.Item key={index} active={isActive}>
            <span className={classes.routePlaceHolder}>
              {match.handle.crumb(match.pathname, isActive)}
            </span>
          </RbBreadcrumb.Item>
        );
      })}
    </RbBreadcrumb>
  );
};

export default Breadcrumb;
