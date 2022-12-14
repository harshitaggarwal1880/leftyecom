import React from 'react'
import { BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs';
import styled from 'styled-components';

const ReviewStars = ({stars}) => {

    const Wrapper = styled.span`
    margin: 3px;
    

    .icon{
        color: gold;
        font-size: 1.2rem;
        
    }
    `;
    
    const ratingstars = Array.from({length: 5}, (ele,index)=>{
        let number = index + 0.5;
        return(
            <span key={index}> 
                {stars>=index+1 ? (
                    <BsStarFill className='icon'/>
                    
                ): stars>= number ? (
                    <BsStarHalf className='icon'/>
                ) : (
                    <BsStar className='icon'/> 
                )
            }
            </span>
        )
    })

    // console.log(ratingstars);

    
    return(
        <Wrapper> 
            {ratingstars}
        </Wrapper>
    )


}

export default ReviewStars