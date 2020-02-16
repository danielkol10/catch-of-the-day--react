import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();
  // constructor() {
  //   super();
  //   // bind goToStore so that it refers to the StorePicker instance
  //   this.goToStore = this.goToStore.bind(this);
  // }
  // creating a ref
  // make go to store as a property of the class syntax
  goToStore = event => {
    // 1) stop the form from auto submit
    event.preventDefault();
    // 2) get the text from that input
    const storeName = this.myInput.current.value; // .current is react reference, .value is js method
    // 3) change the url to the input
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* comments */}
        <h2>Please Enter A store</h2>
        <input
          ref={this.myInput}
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store =></button>
      </form>
    );
  }
}
export default StorePicker;
