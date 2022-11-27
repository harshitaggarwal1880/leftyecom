import React from 'react'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts';
import Partners from '../../Components/Partners/Partners';
import Services from '../../Components/Services/Services';
// import styled from 'styled-components'
import Slider from '../../Components/Slider/Slider';

const Home = () => {
  
  // const Homediv = styled.div`
  //   // background-color: ${({theme}) => theme.colors.bg};
  // `;

  const data = {
    title: "Lefty Store"
  }

  return (
    <>
    <Slider data={data} />
    <FeaturedProducts/>
    <Services/>
    <Partners/>
    </>
  )


}

export default Home