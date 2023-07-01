import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";


function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isOn, changeMode] = useState(false)

  function toggleMode (){
    changeMode((isOn) => !isOn)
  }
  const appClass = isOn ? "App dark" : "App light"
  const modeName = isOn ? "Dark Mode" : "Light Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>{modeName}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
