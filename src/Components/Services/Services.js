import React from 'react'
import styled from 'styled-components'
import Service from '../Service/Service';
import { TbTruckDelivery } from "react-icons/tb";
import { SiBitcoincash } from "react-icons/si";
import { MdEventAvailable } from "react-icons/md";

const Services = () => {
  

   
    
  
return (
    <ServicesCom>

        <h1 className='heading'> Services </h1>

        <div className="services">

            <Service icon={<TbTruckDelivery/>} title={"Fast Delivery"} />
            <Service icon={<SiBitcoincash/>} title={"Cash on Delivery Available"}/>
            <Service icon={<MdEventAvailable/>} title={"24/7 Available"}/>
        </div>
    </ServicesCom> 
  )
}

const ServicesCom = styled.section`
    
display: flex;
// flex-direction: column;
justify-content: center;
flex-wrap: wrap;
align-items: center;

.heading{
    margin-top: 2rem;  
    font-weight: 700;
    text-align: center;
    font-size: 2rem;
}


.services{
    display: flex;
    width: 80%;
    gap: 1rem;
    margin: 2rem 1rem;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
}

`;
export default Services