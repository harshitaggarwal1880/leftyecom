import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Contexts/cartcontext";

const AddtoCart = ({ product }) => {

    const {addToCart} = useCartContext();

  const {id, colors, stock } = product;

  const [color, setcolor] = useState(null);
  const [amount, setamount] = useState(1);

  const setIncrease = () => {
    amount < product.stock ? setamount(amount + 1) : setamount(product.stock);
  };

  const setDecrease = () => {
    amount > 1 ? setamount(amount - 1) : setamount(1);
  };

  return (
    <Wrapper>
      <div className="colors">
        Colors:
        {colors
          ? colors.map((ele, index) => {
              return (
                <button
                  className="colorcircle"
                  style={{ backgroundColor: ele }}
                  onClick={() => {
                    setcolor(ele);
                  }}
                  key={index}
                >
                  {" "}
                  {color === ele ? (
                    <FaCheck style={{ color: "white" }} />
                  ) : null}{" "}
                </button>
              );
            })
          : null}
      </div>
      <div className="cart">
        <div className="stock_amount">
          <button
            className="cartbtn"
            onClick={() => {
              setDecrease();
            }}
          >
            {" "}
            <FaMinus />{" "}
          </button>
          <span className="amount"> {amount} </span>
          <button
            className="cartbtn"
            onClick={() => {
              setIncrease();
            }}
          >
            {" "}
            <FaPlus />{" "}
          </button>
        </div>

        <Link to="/cart" onClick={()=>{ addToCart(id, color, amount, product)}}>
          <button className="btn" > Add to Cart </button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors {
    display: flex;
    align-items: center;
    font-weight: 600;
    margin: 1rem;
  }

  .colorcircle {
    height: 1.6rem;
    width: 1.6rem;
    margin-left: 5px;
    border-radius: 1rem;
    opacity: 0.8;
  }

  .colorcircle:hover {
    opacity: 1;
    border-color: red;
    transform: scale(1.2);
  }
  .stock_amount {
    margin-bottom: 1rem;
    margin-left: 1rem;
  }

  .cartbtn {
    padding: 0.2rem;
  }

  .amount {
    margin: 0.5rem;
  }
`;

export default AddtoCart;
