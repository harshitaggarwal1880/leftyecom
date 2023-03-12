import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import filterReducer from "../reducers/filterReducer";
import { ReducerContext } from "./reducercontext";

const Filtercontext = createContext();

const FiltercontextProvider = ({ children }) => {
  const { products } = useContext(ReducerContext);

  // console.log(products)

  const initialstate = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sort_value: "",
    filter: {
      text: "",
      captegory: "All",
      company: "All",
      color: "All",
      price: 0,
      minPrice: 0,
      maxPrice: 0,
    },
  };

  const [state, dispatch] = useReducer(filterReducer, initialstate);

  useEffect(() => {
    dispatch({ type: "SET_DATA", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [state.sort_value, state.filter]);

  const set_gridview = () => {
    dispatch({ type: "SET_GRIDVIEW" });
  };

  const set_listview = () => {
    dispatch({ type: "SET_LISTVIEW" });
  };

  const sorting = (e) => {
    dispatch({ type: "SET_SORT", payload: e.target.value });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  // to clear the filter
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  return (
    <Filtercontext.Provider
      value={{
        ...state,
        set_gridview,
        set_listview,
        sorting,
        updateFilterValue,
        clearFilters
      }}
    >
      {children}
    </Filtercontext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(Filtercontext);
};

export { useFilterContext, FiltercontextProvider };
