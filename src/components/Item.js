import React from "react";
import { useState } from "react";
//import items from "./data";
//console.log(items)
function Item({ name, category }) {

  const [inCart, changeCart] = useState(false)

  function cartHandler(){
    changeCart((inCart) => !inCart)
  }

  const isInCart = inCart ? document.getElementsByTagName("li").className="in-cart" : document.getElementsByTagName("li").className=""
  const cartStatus = inCart ? "Remove from Cart" : "Add to Cart"

  return (
    <li className={isInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cartHandler} className="add">{cartStatus}</button>
    </li>
  );
}

export default Item;
