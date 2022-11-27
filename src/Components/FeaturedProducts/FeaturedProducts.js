import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components';
import { ReducerContext } from '../../Contexts/reducercontext'
import Card from '../Card/Card';

const FeaturedProducts = () => {
  
  const featureddata = useContext(ReducerContext);
  console.log(featureddata);
  const Wrapper = styled.section`

    @import url("https://fonts.googleapis.com/css2?family=Istok+Web:wght@400;700&display=swap");

    
    font-family: "Istok Web", sans-serif;


    .heading{
        text-align: center;
        margin-top: 2rem;
        
        

    }
  
    .products-container{
        display: flex;
        justify-content: center;
        align-item: center;
        flex-wrap: wrap;
        margin: 1rem;

    }

    .card{
        margin: 1rem;
    }
  
  `;



  if(featureddata.isLoading){
    return <div> ...Loading </div>;
  }  
  return (
    <Wrapper> 

        <div className="container">
            <div className="heading"> 
            <h2> Featured Products</h2>
            </div>
            <div className="products-container">
                {
                    featureddata.featured.map((ele)=>{
                        return <Card className="card" key={ele.id} data={ele} />
                    })
                }
            </div>
        </div>

    </Wrapper> 
  );


}

export default FeaturedProducts