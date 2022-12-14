import React from 'react'
import styled from "styled-components"
import Card from '../Card/Card';

const Gridlist = ({data}) => {
  
  const Wrapper = styled.section`

  .products-container{
    // display: grid;
    // grid-template-columns: auto auto auto;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  `;

  return (
    <Wrapper>
      <div className="products-container">
                {
                    data.filter_products.map((ele)=>{
                        return <Card className="card" key={ele.id} data={ele} />
                    })
                }
            </div>
    </Wrapper>
  )
}

export default Gridlist