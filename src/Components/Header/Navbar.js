import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { FiShoppingCart } from 'react-icons/fi'
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from 'react';

const Navbar = () => {

    const [Menu,setMenu] = useState();


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

        .mobile-nav-btn{
            display:none;
            background-color: transparent;
            cursor: pointer;
            border: none;
        }

        .close-btn{
            display: none;
        }

        @media (max-width: ${({theme}) => theme.media.mobile} ){
            
            
            .mobile-nav-btn{
                display: inline-block;
                z-index: 99;


                .icon{
                    font-size: 2rem;
                }

            }

            .active .icon{
                display: none;
                position: absolute;
                top: 30%;
                right: 10%;
                z-index: 100;

            }

            .active .close-btn{
                display: inline-block;
                font-size: 2.5rem;
            }

            .navbar-list{
                width: 100%;
                height: 100vh;
                position: absolute;
                top: 0;
                left: 0;
                background-color: white;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-item: center;

                visibility: hidden;
                opacity: 0;
                transform: translateY(-100%);

                transition: all 3s linear;
            }

            .active .navbar-list{
                visibility: visible;
                opacity: 1;
                transform: translateX(0%);
                z-index: 99;
                transform-origin: right;
                transition: all 3s linear;
            }

            

        }

    `;

  return (
    <Nav>
        <div className={Menu ? "navbar active": "navbar"}>
        <ul className='navbar-list'>
        <li>
        <Link to="/"  onClick={()=>{setMenu(false)}} className='navbar-link'> Home </Link>    
        </li> 

        <li>
        <Link to="/about"  onClick={()=>{setMenu(false)}} className='navbar-link'> About</Link> 
        </li> 

        <li>
        <Link to="/products"  onClick={()=>{setMenu(false)}} className='navbar-link'>Products</Link> 
        </li> 

        <li>
        <Link to="/contact"  onClick={()=>{setMenu(false)}} className='navbar-link'> Contact</Link>
        </li> 

        <li>
        <Link to="/cart" className='navbar-link cart-link'> 
            <FiShoppingCart  onClick={()=>{setMenu(false)}} className='cart'/>
            <span   onClick={()=>{setMenu(false)}} className='cart-total'> 10 </span> 
        </Link>
        </li> 

        </ul> 


        <div className="mobile-nav-btn"> 
            <CgMenu onClick={()=>{setMenu(true)}} className="menu-btn icon"/>
            <CgClose onClick={()=>{setMenu(false)}} className="close-btn icon"/>
        </div>

        </div> 
    </Nav>
  )
}

export default Navbar