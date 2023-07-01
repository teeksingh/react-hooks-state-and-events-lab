import React from "react";
import Item from "./Item";
import { useState } from "react";


function ShoppingList({ items }) {

  const [filterBy, setFilter] = useState("All")

  function filterHandler (event) {
    setFilter(event.target.value)
  }

  const selectedCategory = items.filter((item) => {
    if (filterBy === "All") {
      return true
    }
    else {
      return item.category === filterBy
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterHandler}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
