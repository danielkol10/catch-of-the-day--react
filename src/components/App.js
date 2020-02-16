import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";

// cc to import class
// imr to import react

class App extends React.Component {
  // state
  state = {
    fishes: {},
    order: {}
  };

  // * to update state *
  addFish = fish => {
    // 1: take a copy of the existing state
    const fishes = { ...this.state.fishes }; // object spread, take a copy
    // 2: add our new fish to the fishes var
    fishes[`fish${Date.now()}`] = fish;
    // 3: set the new fishes object to state
    this.setState({
      // take our copied old fishes plus our new fish and overwrite the existing state
      // so if they are displayed anywhere on the page they will show up
      fishes: fishes
    });
  };

  //  if a function updates the state, it needs to be where the state is
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood"></Header>
          <ul className="fishes"></ul>
        </div>
        <Order></Order>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        ></Inventory>
      </div>
    );
  }
}

export default App;
