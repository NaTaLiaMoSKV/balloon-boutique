import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { balloon, quantity } = action.payload;
      const existingProduct = state.cart.find(
        (item) => item.balloon.id === balloon.id
      );

      if (existingProduct) {
        const newRes = {
          ...state,
          cart: state.cart.map((item) =>
            item.balloon.id === balloon.id ? { ...item, quantity } : item
          ),
        };
        return newRes;
      }
      const res = {
        ...state,
        cart: [...state.cart, { balloon, quantity }],
      };
      return res;
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.balloon.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
