import React, { useCallback } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { FaStar, FaEnvelope } from 'react-icons/fa6';

import Card from '@/components/UI/Card/Card';

import noProfile from '@/assets/images/png/no-profile-picture.png';

import classes from '@/components/TopBar/Notifications/Notifications.module.css';

import {
  Tnotification,
  notificationData
} from '@/components/TopBar/Notifications/data';

const NotificationsTabs: React.FC = () => {
  const generateImage = useCallback(({ type, image }: Tnotification) => {
    switch (type.toUpperCase()) {
      case 'TASK':
        return <FaStar size="1.3rem" color="#5490d6" />;
      case 'MAILBOX':
        return <FaEnvelope size="1.3rem" color="orange" />;
      case 'MESSAGE':
        return (
          <img
            alt="sender"
            className={classes.img}
            src={image ?? noProfile}
            onError={(event: any) => {
              event.target.onerror = null;
              event.target.src = noProfile;
            }}
          />
        );
      default:
        break;
    }
  }, []);
  return (
    <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="all" title="All" className={classes.tab}>
        {notificationData.map((item: Tnotification) => (
          <Card key={item.id}>
            <div className={classes.container}>
              <div className={classes.imageContainer}>
                {generateImage(item)}
              </div>
              <div>
                <div className={classes.title}>{item.title}</div>
                <div className={classes.description}>{item.description}</div>
              </div>
            </div>
          </Card>
        ))}
      </Tab>
      <Tab eventKey="read" title="Read" className={classes.tab}>
        <div className={classes.nodata}>No data found</div>
      </Tab>
      <Tab eventKey="unread" title="Unread" className={classes.tab}>
        <div className={classes.nodata}>No data found</div>
      </Tab>
    </Tabs>
  );
};

export default NotificationsTabs;
