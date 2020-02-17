import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

// cc to import class
// imr to import react

class App extends React.Component {
  // state
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem(
      this.props.match.params.storeId
    );
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  // unmount to prevent memory leak when user exits store
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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

  updateFish = (key, updatedFish) => {
    // 1. Take a copy of the current state
    const fishes = { ...this.state.fishes };
    // 2. Update that state
    fishes[key] = updatedFish;
    // 3. Set that to state
    this.setState({ fishes: fishes });
  };

  deleteFish = key => {
    // 1. take a copy of state
    const fishes = { ...this.state.fishes };
    // 2. remove an item from state
    fishes[key] = null;
    // 3. update state
    this.setState({ fishes: fishes });
  };

  //  if a function updates the state, it needs to be where the state is
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. either add to the order or update the number in the order
    order[key] = order[key] + 1 || 1; // if it exists addd 1, if not set it to 1
    // 3. call setState to update our state object
    this.setState({ order: order });
  };

  removeFromOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. remove that item from order
    delete order[key];
    // 3. call setState to update our state object
    this.setState({ order: order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood"></Header>
          <ul className="fishes">
            {/* take the objects from the state */}
            {/* give a special key so that react identifies it faster */}
            {/* details are info we are passing about each fish */}
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key} // if you need access to the key you have to pass it as something other than key
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              >
                {key}
              </Fish>
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        ></Order>
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        ></Inventory>
      </div>
    );
  }
}

export default App;
