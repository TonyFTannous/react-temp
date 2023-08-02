import React, { useCallback, useState } from 'react';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas
} from 'react-bootstrap';
import { BsSunFill } from 'react-icons/bs';
import {
  AiOutlineBell,
  AiOutlineLogout,
  AiOutlineProfile,
  AiOutlineSetting
} from 'react-icons/ai';

import Badge from '@/components/UI/Badge/Badge';
import NotificationsTabs from '@/components/TopBar/Notifications/NotificationsTab';

import noProfile from '@/assets/images/png/no-profile-picture.png';

import classes from '@/components/TopBar/TopBar.module.css';

const TopBar: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleTheme = useCallback(() => {}, []);

  const handleNotification = useCallback(() => setShow(true), []);

  const handleClose = useCallback(() => setShow(false), []);

  return (
    <>
      <Navbar expand="lg" sticky="top" className="shadow p-2 bg-white">
        <Container fluid>
          <Navbar.Brand>
            <Form className={`d-flex ${classes.brand}`}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className={`${classes.navCollapse} ms-auto`} navbarScroll>
              <Nav.Link className={classes.navLink} onClick={handleTheme}>
                <span className={classes.themeContainer}>
                  <span className="d-lg-none me-2">&nbsp;Theme</span>
                  <BsSunFill size="1.5rem" />
                </span>
              </Nav.Link>
              <Nav.Link
                className={classes.navLink}
                onClick={handleNotification}
              >
                <span className="d-lg-none  me-2">&nbsp;Notifications</span>
                <span className={classes.bellContainer}>
                  <Badge variant="danger" className={classes.badge}>
                    17
                  </Badge>
                  <AiOutlineBell size="1.4rem" />
                </span>
              </Nav.Link>
              <NavDropdown
                title={
                  <div className={classes.accountCountainer}>
                    <div className={classes.userContainer}>
                      <div className={classes.user}>Tony Tannous</div>
                      <div className={classes.profession}>Technical Lead</div>
                    </div>
                    <div className={classes.imgContainer}>
                      <img
                        alt="User Profile"
                        className={classes.img}
                        // src={image ?? noProfile}
                        src={require('../../assets/images/jpeg/user.jpeg')}
                        onError={(event: any) => {
                          event.target.onerror = null;
                          event.target.src = noProfile;
                        }}
                      />
                    </div>
                  </div>
                }
                // drop="start"
                id="navbarDropdown"
                className={classes.navbarDropdown}
              >
                <NavDropdown.Item href="#action3">
                  <AiOutlineSetting size="1rem" />
                  &nbsp;Settings
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  <AiOutlineProfile size="1rem" />
                  &nbsp;Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  <AiOutlineLogout />
                  &nbsp;Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas
        show={show}
        placement="end"
        onHide={handleClose}
        className={classes.container}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={classes.notifTitle}>
            Notifications
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={classes.offcanvasbody}>
          <NotificationsTabs />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default TopBar;
