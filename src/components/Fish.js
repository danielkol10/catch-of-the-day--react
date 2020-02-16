import React, { Component } from "react";
import { formatPrice } from "../helpers";
class Fish extends Component {
  // methods
  handleClick = () => {
    this.props.addToOrder(this.props.index); // add to order with the id of the fish
  };

  render() {
    // destructure optional, take variables on the left and store whats right
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fishname">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        {/* disable button if fish is not available */}
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? "Add To Order" : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default Fish;
