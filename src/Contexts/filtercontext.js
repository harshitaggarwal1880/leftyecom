import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import filterReducer from "../reducers/filterReducer";
import { ReducerContext } from "./reducercontext";

const Filtercontext = createContext();

const FiltercontextProvider = ({children}) =>{


    const { products } = useContext(ReducerContext);

    console.log(products)

    const initialstate = {
        filter_products: [],
        all_products: [],
        grid_view: true
    }

    const [state, dispatch] = useReducer(filterReducer, initialstate);

    useEffect(() => {
      
        dispatch({type: "SET_DATA", payload: products})
    
    }, [products])

    const set_gridview = ()=>{
        dispatch({type: "SET_GRIDVIEW"})
    }


    return( 
        <Filtercontext.Provider value={{...state, set_gridview}}>
            {children}
        </Filtercontext.Provider>
    )
}
  

const useFilterContext = ()=>{
    return useContext(Filtercontext);
}

export { useFilterContext, FiltercontextProvider };