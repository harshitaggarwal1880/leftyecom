


import React from 'react'

const contextreducer = (state,action) => {
  switch (action.type) {

    case "SET_LOADING":
        return{
            ...state,
            isLoading: true,
        }

    case "ERROR":
        return{
            ...state,
            isError: true,
            isLoading: false
        }

    case "GET_DATA":
        const data = action.payload.filter((ele)=>{ 
            return ele.featured===true;
        });
        return{
            ...state,
            isLoading: false,
            isError: false,
            products: action.payload,
            featured: data
        }

    default:
        return state;

  }
}

export default contextreducer;