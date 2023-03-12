const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      let pricearr = action.payload.map((ele) => {
        return ele.price;
      });

      let maxPrice = Math.max(...pricearr);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filter: {
          ...state.filter,
          maxPrice,
          price: maxPrice,
        },
      };
    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "SET_SORT":
      // console.log(action.payload);
      return {
        ...state,
        sort_value: action.payload,
      };

    case "SORT_PRODUCTS":
      let newSortedProducts;

      const { filter_products, sort_value } = state;

      let tempSortProducts = [...filter_products];

      const comparefunc = (a, b) => {
        switch (sort_value) {
          case "lowest":
            return a.price - b.price;

          case "highest":
            return b.price - a.price;

          case "a-z":
            return a.name.localeCompare(b.name);

          case "z-a":
            return b.name.localeCompare(a.name);

          default:
            return 1;
        }
      };

      newSortedProducts = tempSortProducts.sort(comparefunc);

      return {
        ...state,
        filter_products: newSortedProducts,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempfilterproducts = [...all_products];

      const { text, category, company, color, price } = state.filter;
      // console.log("ALL", tempfilterproducts);

      if (text) {
        tempfilterproducts = tempfilterproducts.filter((ele) => {
          return ele.name.toLowerCase().includes(text.toLowerCase());
        });
      }
      // console.log("text", tempfilterproducts);

      if (category !== "All" && category) {
        tempfilterproducts = tempfilterproducts.filter((ele) => {
          return ele.category === category;
        });
      }

      // console.log("categroy", category, tempfilterproducts);

      if (company !== "All" && company) {
        tempfilterproducts = tempfilterproducts.filter((ele) => {
          return ele.company === company;
        });
      }

      // console.log("Company", tempfilterproducts);

      if (color !== "All" && color) {
        tempfilterproducts = tempfilterproducts.filter((ele) => {
          return ele["colors"].includes(color);
        });
      }

      // console.log("Color", tempfilterproducts);

      if (price) {
        tempfilterproducts = tempfilterproducts.filter((ele) => {
          return ele.price <= price;
        });
      }

      return {
        ...state,
        filter_products: tempfilterproducts,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filter: {
          ...state.filter,
          text: "",
          captegory: "All",
          company: "All",
          color: "All",
          price: state.filter.maxPrice,
          minPrice: 0,
          maxPrice: state.filter.maxPrice,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
