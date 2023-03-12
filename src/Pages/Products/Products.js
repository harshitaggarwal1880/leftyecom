import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import Filter from '../../Components/Filter/Filter';
import Productlist from '../../Components/Productlist/Productlist';
import TopGridView from '../../Components/TopGridView/TopGridView';
import { useFilterContext } from '../../Contexts/filtercontext';

const Products = () => {
  

  const filter_data = useFilterContext();

  // console.log(filter_data);

  // useEffect(() => {
    
  //   // filter_data.set_gridview();
    
  // }, [filter_data])
  

  
  return (
    <Wrapper>
      <div className="container">
        
        <div className='filter_section'> 
          <Filter/>
        </div>

        <div className="products_section">
          
          <div className="top_bar">
            <TopGridView/>
          </div>

          <div className="products_area">
            <Productlist/>
          </div>

        </div>

      </div>
    </Wrapper>
  )
}

export default Products
  const Wrapper = styled.section`

  
  .container{
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    
  }

  .products_area{
    margin: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container{
      grid-template-columns: 1fr;
    }
  }

  `;