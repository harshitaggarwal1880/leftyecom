import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {

    const Nav = styled.nav`
    
        .navbar-list{
            display: flex;
            align-items: center;

            .navbar-link{
                &:link,
                &:visited{
                    padding: 0.5rem;
                    margin: 0.5rem;
                    display: inline-block;
                    text-decoration: none;
                    font-size: 1rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    color: ${({theme}) => theme.colors.black};
                    transition: color 0.3s linear;
                }

                &:hover,
                &:active{
                    color: ${({theme}) => theme.colors.helper}
                }
                
            }
        }
    
        li{
            list-style: none;
        }
        
        .cart-link{
            position: relative;

            .cart{
                position: relative;
                font-size: 1.5rem;
            }   

            .cart-total{
                position: absolute;
                width: 2rem;
                height: 1.5rem;
                text-align: center;
                // padding: 1rem;
                top:-10%;
                left: 60%;
                background-color: ${({theme}) => theme.colors.black};
                color: ${({theme}) => theme.colors.white};
                border-radius: 1rem;
                
            }


        }
    `;

  return (
    <Nav>
        <div className='navbar'>
        <ul className='navbar-list'>
        <li>
        <Link to="/" className='navbar-link'> Home </Link>    
        </li> 

        <li>
        <Link to="/about" className='navbar-link'> About</Link> 
        </li> 

        <li>
        <Link to="/products" className='navbar-link'>Products</Link> 
        </li> 

        <li>
        <Link to="/contact" className='navbar-link'> Contact</Link>
        </li> 

        <li>
        <Link to="/contact" className='navbar-link cart-link'> 
            <FiShoppingCart className='cart'/>
            <span className='cart-total'> 10 </span> 
        </Link>
        </li> 

        </ul> 
        </div> 
    </Nav>
  )
}

export default Navbar