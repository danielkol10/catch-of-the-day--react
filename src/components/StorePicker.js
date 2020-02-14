import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   // bind goToStore so that it refers to the StorePicker instance
  //   this.goToStore = this.goToStore.bind(this);
  // }
  // creating a ref
  myInput = React.createRef();
  // make go to store as a property of the class syntax
  goToStore = event => {
    // 1) stop the form from auto submit
    event.preventDefault();
    // 2) get the text from that input
    console.log(this.myInput.value.value); // .value twice because one is react syntx the the other is js syntx
    // 3) change the url to the input
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* comments */}
        <h2>Please Enter A store</h2>
        <input
          type="text"
          ref={this.myInput}
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
