import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

const Slider = (props) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="header-data">
          <p className="bless">Welcome to</p>
          <h1 className="title">{props.data.title}</h1>
          <p className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            incidunt omnis, culpa at odio quos aut possimus tenetur assumenda
            aliquid. Aperiam, beatae eligendi.
          </p>
          <Link to="/products">
            <Button className="shop-btn"> Shop Now </Button>
          </Link>
        </div>
        <div className="header-img"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  font-weight: 500;

  .container {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .header-data {
    position: absolute;
    color: white;
    text-shadow: 0.1rem 0.1rem 1rem black;
    width: 50vw;
  }

  .header-img {
    background-image: url("Images/slider1.jpg");
    background-position: center;
    background-size: cover;
    height: 70vh;
    width: 100vw;
  }

  .bless {
    margin: 1rem;
    font-size: 1.5rem;
  }

  .title {
    margin: 1rem;
    font-size: 3rem;
  }

  .desc {
    margin: 1rem;
    font-size: 1.2rem;
    width: 70%;
  }

  .shop-btn {
    margin: 1rem;
    font-size: 1rem;
    font-weight: 500;
    text-shadow: 0.1rem 0.1rem 1rem black;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      justify-content: center;
      align-items: center;
    }

    .header-data {
      width: 80%;
    }

    .bless {
      font-size: 1rem;
    }

    .title {
      font-size: 2rem;
    }

    .desc {
      margin: 1rem;
      font-size: 0.7rem;
    }

    .shop-btn {
      padding: 1rem 1.4rem;
    }
  }
`;

export default Slider;
