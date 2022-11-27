import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = (props) => {
  const Card = styled.section`
    @import url("https://fonts.googleapis.com/css2?family=Istok+Web:wght@400;700&display=swap");

    
    font-family: "Istok Web", sans-serif;
    

    .card {
      position: relative;
      width: 17rem;
      height: 95%;
      background: #191919;
      border-radius: 20px;
      overflow: hidden;
    }

    .card::before {
      content: "";
      position: absolute;
      top: -50%;
      width: 100%;
      height: 100%;
      background: #3631a8;
      transform: skewY(345deg);
      transition: 0.5s;
    }

    .card:hover::before {
      top: -70%;
      transform: skewY(390deg);
    }

    .card::after {
      content: "${props.data.company}";
      position: absolute;
      bottom: 0;
      left: 0;
      font-weight: 600;
      font-size: 6em;
      color: rgba(0, 0, 0, 0.1);
    }

    .card .imgBox {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 20px;
      z-index: 1;
    }
    /*
  .card .imgBox img {
      max-width: 100%;
      
      transition: .5s;
  }
  
  .card:hover .imgBox img {
      max-width: 50%;
        
  }
  */
    .card .contentBox {
      position: relative;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 2;
    }

    .card .contentBox h3 {
      font-size: 18px;
      color: white;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .card .contentBox .price {
      font-size: 24px;
      color: white;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .card .contentBox .buy {
      position: relative;
      top: 100px;
      opacity: 0;
      padding: 10px 30px;
      margin-top: 15px;
      color: #000000;
      text-decoration: none;
      background: #ffce00;
      border-radius: 30px;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: 0.5s;
    }

    .card:hover .contentBox .buy {
      top: 0;
      opacity: 1;
    }

    .mouse {
      height: 200px;
      width: auto;
    }
  `;

  return (
      <Card>
      <div class="card">
        <Link to={`/product:${props.data.id}`}>
        <div class="imgBox">
          <img
            src={props.data.image}
            alt={props.data.name}
            class="mouse"
          />
        </div>
    </Link>

        <div class="contentBox">
          <h3>{props.data.name}</h3>
          <h2 class="price">
            {Intl.NumberFormat("en-IN", {style: "currency", currency:"INR",maximumFractionDigits:2}).format(props.data.price/100) }
          </h2>
          <Link to="/buynow" class="buy">
            Buy Now
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default Card;
