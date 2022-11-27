import React from 'react'
import styled from 'styled-components'

const Partners = () => {

    const Partners = styled.section`

        text-align: center;
        // gap: 2rem;
        display: flex;
        flex-direction: column;
        align-content: cneter;
        flex-wrap: wrap;
        background-color: #e2e5f7;
        

        .container{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin: 3rem;
            gap: 4rem;
        }

        .heading{
            margin: 1rem;
            font-size: 2rem;
        }

        .icon{
            height: 5rem;
            transition: 0.3s;
        }

        .icon:hover{
            transform: scale(1.1);
            transition: 0.3s;
        }

    `;

return (
    <Partners>
        <h2 className='heading'> Trusted Partners </h2>
        <div className="container">        
            <img src="Images/red.svg" className='icon' alt="Not Found"/>
            <img src="Images/node.svg" className='icon' alt="Not Found"/>
            <img src="Images/redbull.svg" className='icon' alt="Not Found"/>
            <img src="Images/tensorflow.svg" className='icon' alt="Not Found"/>
        </div>
    </Partners> 
  )
}

export default Partners