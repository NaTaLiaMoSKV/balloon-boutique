import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const loadCartFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Failed to load cart:", error);
    return [];
  }
};

const initialState = {
  cart: loadCartFromLocalStorage(),
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { balloon, quantity } = action.payload;
      const existingProduct = state.cart.find(
        (item) => item.balloon.id === balloon.id
      );

      const updatedCart = existingProduct
        ? state.cart.map((item) =>
            item.balloon.id === balloon.id ? { ...item, quantity } : item
          )
        : [...state.cart, { balloon, quantity }];

      return { ...state, cart: updatedCart };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.balloon.id !== action.payload.id
        ),
      };

    case "UPDATE_CART_QUANTITY": {
      const { balloon, quantity } = action.payload;
      const updatedCart = state.cart.map((item) =>
        item.balloon.id === balloon.id ? { ...item, quantity } : item
      );
      return { ...state, cart: updatedCart };
    }

    case "UPDATE_CART_INSCRIPTION": {
      const { id, inscription } = action.payload;
      const updatedCart = state.cart.map((item) =>
        item.balloon.id === id ? { ...item, inscription } : item
      );
      return { ...state, cart: updatedCart };
    }

    case "REMOVE_INSCRIPTION":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.balloon.id === action.payload.id
            ? { ...item, inscription: "" }
            : item
        ),
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
