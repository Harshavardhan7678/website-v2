import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Components
import { NavContainer, LogoContainer, TabContainer, TabLink } from './styles';
import { Para2 } from '../..';
import { SectionContainer } from '../../shared';

// assets
import { nav } from '../../../../config/content';

const DesktopNavbar = ({ toggleMenuOpen }) => {
  const [shadow, setShadow] = useState(false);
  const { logo, navItems } = nav;

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <NavContainer shadow={shadow}>
      <SectionContainer className='navbar'>
        <LogoContainer>
          <Link to='/'>
            <img src={logo.src} className='logo' alt={logo.alt} />
          </Link>
        </LogoContainer>

        <FontAwesomeIcon className='bars' onClick={toggleMenuOpen} icon={faBars} />

        <TabContainer>
          {navItems.map(({ link, name }) => (
            <TabLink key={link} to={link}>
              <Para2 className='nav-text'>{name}</Para2>
            </TabLink>
          ))}
        </TabContainer>
      </SectionContainer>
    </NavContainer>
  );
};

export default DesktopNavbar;
