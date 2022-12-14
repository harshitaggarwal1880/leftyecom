import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa';


const Colors = ({colors}) => {
  
    const [color, setcolor] = useState(colors[0])

    const Wrapper = styled.span`
    
    .colors{
        display: flex;
        align-items: center;
        font-weight: 600;
    }
   
    .colorcircle{
        height: 1.6rem;
        width: 1.6rem;
        margin-left: 5px;
        border-radius: 1rem;
        opacity: 0.8;
    }

    .colorcircle:hover{
        opacity: 1;
        border-color: red;
        transform: scale(1.2);
    }

    `;
  
  
  
    return (

        <Wrapper> 
            <div className='colors'>
                Colors: 
                {colors ? colors.map((ele,index)=>{
                    return(
                      <button className="colorcircle" style={{backgroundColor: ele}} onClick={()=>{setcolor(ele)}} key={index}> {color===ele ? <FaCheck style={{color: "white"}}/> : null} </button>
                    )
                  }) : null}
            </div> 
        </Wrapper>
    
  )
}

export default Colors