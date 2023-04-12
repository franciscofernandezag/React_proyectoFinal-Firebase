import React, { createContext, useState, useEffect } from "react";

export const CustomContext = createContext();

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totals, setTotals] = useState({ qty: 0, total: 0 });

  useEffect(() => {
    let qtyInitial = 0;
    let total = 0;
    cart.forEach((product) => {
      qtyInitial += product.quantity;
      total += product.quantity * product.price;
    });
    setTotals({ qty: qtyInitial, total: total });
  }, [cart]);

  const addProduct = (product, quantity) => {
    if (isInCart(product.id)) {
      setCart(
        cart.map((productCart) => {
          if (productCart.id === product.id)
            return { ...productCart, quantity };
          return productCart;
        })
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };
  const removeFromCart = (productId) => {
    setCart((prevState) => {
      return prevState.filter((item) => item.id !== productId);
    });
  };
  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  return (
    <CustomContext.Provider
      value={{ cart, totals, removeFromCart, addProduct }}
    >
      {children}
    </CustomContext.Provider>
  );
};
