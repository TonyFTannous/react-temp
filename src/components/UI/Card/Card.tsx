import React, { ReactNode } from 'react';

import classes from '@/components/UI/Card/Card.module.css';

const Card: React.FC<{
  className?: string;
  children?: ReactNode;
}> = (props) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
