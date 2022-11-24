import React from 'react'
import styled from 'styled-components'
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
    const Wrapper = styled.section`

        // height: 30vh;
        background-color: #04045b;
        color: white;

        .icon{
            font-size: 2rem;
            
        }

        .container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .social{
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
            padding: 1rem;

        }

        .heading{
            text-align: center;
        }


        .box{
            margin-bottom: 3rem;
        }

        .pages{
            margin: 3rem;
            border-bottom: 2px solid;
        }

        .pages-list{
            display: flex;
            flex-wrap: wrap;
        }

        .page-item{
            list-style: none;
            margin: 1rem;

            // border-bottom: 2px solid;
        }

        .copyright{
            font-size: 70%;
        }

    `;

  return (

    <Wrapper>
        <div className="container">

            <div className="pages">
                <h3 className='heading'>All Pages</h3>
                <ul className='pages-list'>
                    <li className='page-item'>Home</li>
                    <li className='page-item'>About Us</li>
                    <li className='page-item'>Contact Us</li>
                    <li className='page-item'>Privacy policy</li>
                    <li className='page-item'>Terms & Conditions</li>
                </ul>
            </div>
            <div className="box">
            <div className="social">
                <a href='https://www.instagram.com/' target={'_blank'} rel="noreferrer"> <BsInstagram className='icon' /> </a>
                <a href='https://www.facebook.com/' target={'_blank'} rel="noreferrer"> <BsFacebook className='icon' /> </a>
                <a href='https://www.twitter.com/' target={'_blank'} rel="noreferrer"> <BsTwitter className='icon' /> </a>
            </div>
            <div className="copyright">
                <p> @{new Date().getFullYear()}  LeftyStore | &copy; Copyright. All right reserved </p>
            </div>
            </div>
        </div>
    </Wrapper> 

  )
}

export default Footer