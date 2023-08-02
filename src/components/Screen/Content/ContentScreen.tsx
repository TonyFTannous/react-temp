import React, { ReactNode } from 'react';
import { Card } from 'react-bootstrap';

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

import classes from '@/components/Screen/Content/ContentScreen.module.css';

const ContentScreen: React.FC<{
  title: ReactNode | string;
  description?: ReactNode | string;
  children: ReactNode;
}> = ({ title, description, children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.breadcrumb}>
        <Breadcrumb />
      </div>
      <Card className={classes.main}>
        <Card.Body>
          <Card.Title className={classes.title}>{title}</Card.Title>
          {description && (
            <Card.Subtitle className={classes.subtitle}>
              {description}
            </Card.Subtitle>
          )}
          {children}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContentScreen;
