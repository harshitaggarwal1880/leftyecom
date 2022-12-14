import React, { useState } from 'react'
import styled from 'styled-components'
import { FaPlus , FaMinus } from 'react-icons/fa';
import { Link } from "react-router-dom";

const AddtoCart = ({product}) => {

    const [amount, setamount] = useState(1);

    const setIncrease = ()=>{
        amount < product.stock ? setamount(amount+1) : setamount(product.stock);
    }

    const setDecrease = ()=>{
        amount > 1 ? setamount(amount-1): setamount(1);
    }

    const Wrapper = styled.section`

        
        .stock_amount{
            margin-bottom: 1rem;
            margin-left: 1rem;
        }

        .cartbtn{
            padding: 0.2rem;
        }
    
        .amount{
            margin: 0.5rem;
        }
    `;



  return (
    <Wrapper> 
        <div className="cart">
        
        <div className="stock_amount">
            <button className='cartbtn' onClick={()=>{setDecrease()}}> <FaMinus/> </button>
            <span className='amount'> {amount} </span>
            <button className='cartbtn' onClick={()=>{setIncrease()}}> <FaPlus/> </button>
        </div>

        <Link to="/cart">
        <button className='btn'> Add to Cart </button> 
        </Link>
        </div>
    </Wrapper>
  )
}

export default AddtoCart