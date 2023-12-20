import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <NavWrapper>
      <NavLink to="/necklaces" activeClassName="active">Necklaces</NavLink>
      <NavLink to="/earrings" activeClassName="active">Earrings</NavLink>
      <NavLink to="/bracelets" activeClassName="active">Bracelets</NavLink>
      <NavLink to="/rings" activeClassName="active">Rings</NavLink>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  a {
    text-decoration: none;
    color: #000;
    font-size: 1rem;
    margin: 0 10px;
    padding: 10px 20px;
    border: 2px solid #000;
    border-radius: 25px; // This creates the rounded corners
    transition: all 0.3s ease;

    &:hover {
      background-color: #000;
      color: #fff;
    }

    &.active {
      background-color: #000;
      color: #fff;
    }
  }
`;

export default NavigationMenu;
