import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

// cc to import class
// imr to import react

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood"></Header>
        </div>
        <Order></Order>
        <Inventory></Inventory>
      </div>
    );
  }
}

export default App;
