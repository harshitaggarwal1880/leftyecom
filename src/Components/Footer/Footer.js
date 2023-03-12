import React from "react";
import styled from "styled-components";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="pages">
          <h3 className="heading">All Pages</h3>
          <ul className="pages-list">
            <Link to="/" className="page-item">
              Home
            </Link>
            <Link to="/about" className="page-item">
              About Us
            </Link>
            <Link to="/contact" className="page-item">
              Contact Us
            </Link>
            <li className="page-item">Privacy policy</li>
            <li className="page-item">Terms & Conditions</li>
          </ul>
        </div>
        <div className="box">
          <div className="social">
            <a
              href="https://www.instagram.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <BsInstagram className="icon" />{" "}
            </a>
            <a
              href="https://www.facebook.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <BsFacebook className="icon" />{" "}
            </a>
            <a
              href="https://www.twitter.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <BsTwitter className="icon" />{" "}
            </a>
          </div>
          <div className="copyright">
            <p>
              {" "}
              @{new Date().getFullYear()} LeftyStore | &copy; Copyright. All
              right reserved{" "}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  // height: 30vh;
  background-color: #04045b;
  color: white;

  .icon {
    font-size: 2rem;
    color: aqua;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .social {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 1rem;
  }

  .heading {
    text-align: center;
  }

  .box {
    margin-bottom: 3rem;
  }

  .pages {
    margin: 3rem;
    border-bottom: 2px solid;
  }

  .pages-list {
    display: flex;
    flex-wrap: wrap;
  }

  .page-item {
    list-style: none;
    margin: 1rem;
    text-decoration: none;
    color: white;
    font-size: 1rem;
  }

  .copyright {
    font-size: 70%;
  }
`;

export default Footer;
