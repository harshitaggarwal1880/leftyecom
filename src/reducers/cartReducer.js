import React from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, color, amount, product } = action.payload;

      let existingProduct = state.cart.find((curEle) => {
        return curEle.id === id + color;
      });

      if (existingProduct) {
        let updatedProduct = state.cart.map((curEle) => {
          if (curEle.id === id + color) {
            let newAmount = curEle.amount + amount;
            if (newAmount >= curEle.max) {
              newAmount = curEle.max;
            }
            return {
              ...curEle,
              amount: newAmount,
            };
          } else {
            return curEle;
          }
        });

        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };

        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case "REMOVE_ITEM":
      let updatedCart = state.cart.filter((curEle) => {
        return curEle.id !== action.payload;
      });

      return {
        ...state,
        cart: updatedCart,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "SET_INCREASE":
      let incupdatedProduct = state.cart.map((curEle) => {
        if (curEle.id === action.payload) {
          let incAmount = curEle.amount + 1;
          if (incAmount >= curEle.max) {
            incAmount = curEle.max;
          }
          return {
            ...curEle,
            amount: incAmount,
          };
        } else {
          return curEle;
        }
      });

      return {
        ...state,
        cart: incupdatedProduct,
      };

    case "SET_DECREASE":
      let decupdatedProduct = state.cart.map((curEle) => {
        if (curEle.id === action.payload) {
          let decAmount = curEle.amount - 1;
          if (decAmount <= 1) {
            decAmount = 1;
          }
          return {
            ...curEle,
            amount: decAmount,
          };
        } else {
          return curEle;
        }
      });

      return {
        ...state,
        cart: decupdatedProduct,
      };

    case "CART_TOTAL_ITEM":
      let cartTotalItems = state.cart.reduce((initialVal, curEle) => {
        initialVal = initialVal+curEle.amount;
        return initialVal;
      }, 0);

      return {
        ...state,
        total_items: cartTotalItems,
      }

    case "CART_TOTAL_PRICE":
        let cartTotalprice = state.cart.reduce((initialVal,curEle)=>{
            initialVal = initialVal+ (curEle.amount*curEle.price);
            return initialVal;
        },0 )

        return{
            ...state,
            total_price: cartTotalprice,
        }



    default:
      return state;
  }
};

export default cartReducer;
