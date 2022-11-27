import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../Contexts/productcontext'

const Cart = () => {


  // here we use product state using productcontext
  const productstate = useContext(ProductContext);
  
  
  
  useEffect(() => {
  
    // productstate.setstate({
    //   "name":"HEllo"
    // });

    productstate.update();
    
  })
  
  return (
    <div>{productstate.state.name}</div>
  )
}

export default Cart