import React from 'react'
import styled from 'styled-components'


const Service = (props) => {


    

  return (
    <Card>
        <div className="content">
            
            <div className="icon">{props.icon} </div>
            
            <div className="title">{props.title}</div>
            
            <p className="desc">Lorem ipsum dolor sit amet </p>

        </div>
    </Card>
  )
}

const Card = styled.div`

    width: 20rem;
    text-align: center;
    border-radius: 1rem;
    transition: 0.3s;
    padding: 2rem;
    cursor: pointer;
    padding: 1rem;
    font-weight: 500;

    :hover{
        transform: scale(1.05);
        // background-color: alicegrey;       
    }

    .icon{
         font-size: 3rem;
         padding: 0.5rem;
    }

    .title{
        font-size: 1.5rem;
        margin: 0.5rem;
    }

        
    `;

export default Service