import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PageNavigation = (props) => {
  
  
    return (
    <Wrapper> 
        <Link to="/"> Home </Link>/ {props.data.name}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  
  padding: 2rem;
  font-size: 1.3rem;

  
  `;
  

export default PageNavigation