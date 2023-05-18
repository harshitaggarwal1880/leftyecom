import styled from "styled-components";

import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <Wrapper>
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
        </Wrapper>
  );
};

const Wrapper = styled.section`

  .stock_amount {
display:flex;
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

export default CartAmountToggle;