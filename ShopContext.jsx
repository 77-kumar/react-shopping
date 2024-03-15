import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../Products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo=PRODUCTS.find((product)=>product.id===Number(item));
        totalAmount += cartItems[item]*itemInfo.Price ;

      }

    }
    return totalAmount;
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }
  const updateCart=(newAmount,itemId)=>{
    setCartItems((prev) => ({ ...prev, [itemId]:newAmount }));


  }

  const contextValue = { cartItems, addToCart, removeCart ,updateCart ,getTotalCartAmount};
  console.log(cartItems);

  return (
    <div>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    </div>
  );
}
