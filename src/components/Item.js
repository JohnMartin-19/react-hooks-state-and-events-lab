import React, { useState } from "react";
import items from "../data/items";

function Item({ name, category }) {
  const [item,setItem] = useState(true) 
  

  function handleAddItem(event){
    console.log('clicked')
    const newItem = item();
    const newItemArr = [...items, newItem]
    setItem(newItemArr)
  }
 
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddItem}>Add to Cart</button>
    </li>
  );
}

export default Item;
