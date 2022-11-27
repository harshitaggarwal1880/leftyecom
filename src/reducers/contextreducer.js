const contextreducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "ERROR":
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case "GET_DATA":
      const data = action.payload.filter((ele) => {
        return ele.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
        featured: data,
      };



    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SINGLE_ERROR":
      return {
        ...state,
        isSingleError: true,
        isSingleLoading: false,
      };

    case "GET_SINGLE_DATA":
      return {
        ...state,
        isSingleLoading: false,
        isSingleError: false,
        SingleProduct: action.payload
      };

    default:
      return state;
  }
};

export default contextreducer;
