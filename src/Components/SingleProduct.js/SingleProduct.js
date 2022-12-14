// import React, { useContext } from 'react'
import { useState } from "react";
import styled from "styled-components";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import ReviewStars from "../ReviewStars/ReviewStars";
import Colors from "../Colors/Colors";
import AddtoCart from "../Add_to_Cart/AddtoCart";

const SingleProduct = (props) => {
  const productdata = props.data;

  console.log(productdata);

  const Wrapper = styled.section`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap");

    font-family: "Open Sans", sans-serif;

    line-height: 1.5;

    .card-wrapper {
      max-width: 1100px;
      margin: 0 auto;
    }
    img {
      width: 23%;
      margin: 2px;
      display: block;
    }
    .img-display {
      overflow: hidden;
    }
    .img-showcase {
      display: flex;
      width: 100%;
      transition: all 0.5s ease;
    }
    .img-showcase img {
      min-width: 100%;
    }
    .img-select {
      display: flex;
    }
    .img-item {
      margin: 0.3rem;
      display: flex;
    }



    .img-item:nth-child(1),
    .img-item:nth-child(2),
    .img-item:nth-child(3) {
      margin-right: 0;
      cursor: pointer;
    }
    .all-img:hover {
      opacity: 0.8;
    }
    .product-content {
      padding: 2rem 1rem;
    }
    .product-title {
      font-size: 3rem;
      text-transform: capitalize;
      font-weight: 700;
      position: relative;
      color: #12263a;
      margin: 1rem 0;
    }
    .product-title::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 4px;
      width: 80px;
      background: #12263a;
    }
    .product-link {
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 0.9rem;
      display: inline-block;
      margin-bottom: 0.5rem;
      background: #256eff;
      color: #fff;
      padding: 0 0.3rem;
      transition: all 0.5s ease;
    }
    .product-link:hover {
      opacity: 0.9;
    }
    .product-rating {
      color: #ffc107;
    }
    .product-rating span {
      font-weight: 600;
      color: #252525;
    }
    .product-price {
      margin: 1rem 0;
      font-size: 1rem;
      font-weight: 700;
    }
    .product-price span {
      font-weight: 400;
    }
    .last-price span {
      color: #f64749;
      text-decoration: line-through;
    }
    .new-price span {
      color: #256eff;
    }
    .product-detail h2 {
      text-transform: capitalize;
      color: #12263a;
      padding-bottom: 0.6rem;
    }
    .product-detail p {
      font-size: 0.9rem;
      padding: 0.3rem;
      opacity: 0.8;
    }
    .product-detail ul {
      margin: 1rem 0;
      font-size: 0.9rem;
    }
    .product-detail ul li {
      margin: 0;
      list-style: none;
      background: url(https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/checked.png)
        left center no-repeat;
      background-size: 18px;
      padding-left: 1.7rem;
      margin: 0.4rem 0;
      font-weight: 600;
      opacity: 0.9;
    }
    .product-detail ul li span {
      font-weight: 400;
    }

    
    .purchase-info {
      margin: 1.5rem 0;
    }
    .purchase-info input,
    .purchase-info .btn {
      border: 1.5px solid #ddd;
      border-radius: 25px;
      text-align: center;
      font-size: 1.2rem;
      padding: 0.45rem 0.8rem;
      outline: 0;
      margin-right: 0.2rem;
      margin-bottom: 1rem;
    }
    .purchase-info input {
      width: 60px;
    }
    .purchase-info .btn {
      cursor: pointer;
      color: #fff;
    }
    .purchase-info .btn:first-of-type {
      background: #256eff;
    }
    .purchase-info .btn:last-of-type {
      background: #f64749;
    }
    .purchase-info .btn:hover {
      opacity: 0.9;
    }
    .social-links {
      display: flex;
      align-items: center;
      margin: 1rem;
    }
    .social-links a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      color: #000;
      border: 1px solid #000;
      margin: 0 0.2rem;
      border-radius: 50%;
      text-decoration: none;
      font-size: 0.8rem;
      transition: all 0.5s ease;
    }
    .social-links a:hover {
      background: #000;
      border-color: transparent;
      color: #fff;
    }

    @media screen and (min-width: 992px) {
      .card {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
      }
      .card-wrapper {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .product-imgs {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .product-content {
        padding-top: 0;
      }
    }
  `;

  const [selimage, setselimage] = useState(null);
  return (
    <Wrapper>
      <div class="card-wrapper">
        <div class="card">
          {/* <!-- card left --> */}
          <div class="product-imgs">
            <div class="img-display">
              <div class="img-showcase">
                {productdata.image ? (
                  <img
                    src={selimage || productdata.image[0].url}
                    alt="shoe image"
                  />
                ) : (
                  "Loading"
                )}
              </div>
            </div>
            <div class="img-select">
              <div class="img-item">
                {productdata.image
                  ? productdata.image.map((ele, index) => {
                      return (
                        <img
                          src={ele.url}
                          alt={ele.filename}
                          key={index}
                          className="all-img"
                          onClick={() => {
                            setselimage(ele.url);
                          }}
                        />
                      );
                    })
                  : "Loading"}
              </div>
            </div>
          </div>
          {/* <!-- card right --> */}
          <div class="product-content">
            <h2 class="product-title">{productdata.name}</h2>
            {/* <a href = "/" class = "product-link">visit nike store</a> */}
            <div class="product-rating">
              <ReviewStars stars={productdata.stars}/>
              <span>
                {productdata.stars}({productdata.reviews})
              </span>
            </div>

            <div class="product-price">
              <p class="last-price">
                Old Price:{" "}
                <span>
                  {" "}
                  {Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 2,
                  }).format((props.data.price * 1.2) / 100)}
                </span>
              </p>
              <p class="new-price">
                New Price:{" "}
                <span>
                  {" "}
                  {Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 2,
                  }).format(props.data.price / 100)}{" "}
                </span>
              </p>
            </div>

            <div class="product-detail">
              <h2>about this item: </h2>
              <p>{productdata.description}</p>
              <ul>
                <li>
                 {productdata.colors ? <Colors colors={productdata.colors}/> : "Colors:" }
                </li>
                <li>
                  Available:{" "}
                  <span>
                    {productdata.stock > 0 ? "in stock" : "Not Available"}
                  </span>
                </li>
                <li>
                  Category: <span>{productdata.category}</span>
                </li>
                <li>
                  Shipping Area: <span>All over the world</span>
                </li>
                <li>
                  Shipping Fee: <span>Free</span>
                </li>
              </ul>
            </div>

            <div class="purchase-info">
              <AddtoCart product={productdata}/>              
            </div>

            <div class="social-links">
              <p>Share At: </p>
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
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProduct;
