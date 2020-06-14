import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import User from "../user/User";

const Header = () => {
  return (
    <HeaderBox className="header">
      <User />
      <Nav>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/notes" activeClassName="active">
          List
        </NavLink>
        <NavLink to="/Write" activeClassName="active">
          Write
        </NavLink>
      </Nav>
    </HeaderBox>
  );
};

export default Header;
const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Nav = styled.nav`
  margin-right: 2em;
  height: 100%;
  display: flex;
  align-items: center;
  color: #666;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1em;
    height: 100%;
    position: relative;
    &.active {
      color: #1890ff;
      &:after {
        content: "";
        display: block;
        background: #1890ff;
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
`;
