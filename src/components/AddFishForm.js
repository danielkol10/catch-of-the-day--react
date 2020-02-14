import React, { Component } from "react";

class AddFishForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    // 1) stop the form from submitting
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value), // 109.252
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addFish(fish);
    // refresh the form
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          ref={this.nameRef}
          type="text"
          name="name"
          placeholder="Name"
          className=""
        />
        <input
          ref={this.priceRef}
          type="text"
          name="price"
          placeholder="Price"
          className=""
        />
        <select ref={this.statusRef} name="status" className="">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          ref={this.descRef}
          name="desc"
          placeholder="Desc"
          className=""
        />
        <input
          ref={this.imageRef}
          type="text"
          name="image"
          placeholder="Image"
          className=""
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
