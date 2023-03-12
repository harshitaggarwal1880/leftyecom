
import React from 'react'
import List_card from '../List_card/List_card'

const Listlist = ({data}) => {
  return (
    data.filter_products.map((ele,index)=>{
      return <List_card data={ele} key={index} />
    })
  )
}

export default Listlist