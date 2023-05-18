import axios from "axios";
import { useEffect, useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducers/contextreducer";

// here We create a context -- like a store or storage
const ReducerContext = createContext();

const ApiUrl = "https://api.pujakaitem.com/api/products";
// const ApiUrl = "http://localhost:5000/products";

const ReducerProvider = (props) => {
    
  const initialstate = {
    isLoading: false,
    isError: false,
    products: [],
    featured: [],
    isSingleLoading: false,
    isSingleError: false,
    SingleProduct: {},
  };

  const [state2, dispatch] = useReducer(reducer, initialstate);


  const getapiproducts = async (url) => {
    dispatch({type: "SET_LOADING"})
    try {
      const res = await axios.get(url);
      const products = res.data;
      console.log(products);
      dispatch({type: "GET_DATA", payload: products})
    } catch (error) {
        dispatch({type: "ERROR"})
    }
  };


  const getSingleProduct = async (url)=>{
    dispatch({type: "SET_SINGLE_LOADING"})
    try {
      const res = await axios.get(url);
      const product_data = res.data;
      console.log(product_data);
      dispatch({type: "GET_SINGLE_DATA", payload: product_data})
    } catch (error) {
      dispatch({type: "SINGLE_ERROR"})
    }
  }


  useEffect(() => {
    getapiproducts(ApiUrl);
  }, []);

  return (
    // here it is like a provider which provide state to all childrens like app.js component
    <ReducerContext.Provider value={{ ...state2, getSingleProduct }}>
      {/* here props.children refers to the app.js all component which wrapped in productstate  */}
      {props.children}
    </ReducerContext.Provider>
  );
};

export { ReducerContext, ReducerProvider };
