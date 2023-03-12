import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import logo from "../../Assets/mainlogo.png"

const Header = () => {
  return (
    <MainHeader>
      <Link to="/">
        <img className="logo" src={logo} alt="Not Found" />
      </Link>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 2rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
    width: 12rem;
    padding: 1rem;
  }
`;

export default Header;
