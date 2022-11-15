import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './Navbar';

const Header = () => {
  
  const MainHeader = styled.header`
    
    padding: 0 2rem;
    height: 5rem;
    background-color: ${({theme}) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  
    .logo{
        height: 4rem;
        border: 2px solid black;
        border-radius: 1rem;
    }
  `;
  
    return (
    <MainHeader>
        <Link to="/"> 
            <img className='logo' src='Images/EditLogo.png' alt='Not Found'/> 
        </Link> 
        <Navbar/> 
    </MainHeader>
  )
}

export default Header