import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterBy, setfilterBy] = useState('All')
  const[item,setItem] = useState(items)
  const itemDisplay = items.filter((item)=>{
    if(filterBy === 'All'){
      return true
    }else {
      return item.id === filterBy
    }
  })


    function handleFilter(event){
      setfilterBy(event.target.value);
    }
  const itemList = itemDisplay.map((item)=>(
    <li key={item.id} onClick={handleFilter}>
      {item.name}
    </li>
  ))

  return (
    <div className="ShoppingList" onChange={handleFilter}>
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
