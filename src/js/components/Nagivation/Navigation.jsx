import React from 'react';
import PropTypes from 'prop-types';
import {
  NavItem, NavLink, Nav, NavBar, NavBarBrand, Collapse,
} from './Navigation.style';

const Link = ({
  location, href, children, ...props
}) => {
  const isActive = location.pathname === href;

  return (
    <NavLink
      data-type="portal-link"
      href={href}
      active={isActive}
      {...props}
    >
      { children }
    </NavLink>
  );
};

Link.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Navigation = ({ location }) => (
  <NavBar>
    <NavBarBrand data-type="portal-link" href="/">Playground</NavBarBrand>
    <Collapse>
      <Nav>
        <NavItem>
          <Link href="/react-app" location={location}>ReactJS</Link>
        </NavItem>
        <NavItem>
          <Link href="/angular-app" location={location}>AngularJS</Link>
        </NavItem>
      </Nav>
    </Collapse>
  </NavBar>
);

Navigation.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Navigation;
