import React from 'react'
import SingleProduct from '../../Components/SingleProduct.js/SingleProduct'
import { useEffect,useContext  } from 'react';
import { useParams } from 'react-router-dom'
import { ReducerContext } from '../../Contexts/reducercontext';
import PageNavigation from '../../Components/PageNavigation/PageNavigation';

const Product = () => {

  let apidata = useContext(ReducerContext);

  const { id } = useParams();

  console.log(apidata);

  const API =  "https://api.pujakaitem.com/api/products"

  useEffect(() => {
    
    apidata.getSingleProduct(`${API}?id=${id}`);
    // apidata = useContext(ReducerContext);
    
  },[])


const productdata = apidata.SingleProduct;

console.log(productdata)

  return (
    <>
    <PageNavigation data={productdata}/> 
    <SingleProduct data={productdata}/>
    </>
  )
}

export default Product