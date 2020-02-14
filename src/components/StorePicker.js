import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  render() {
    return (
      <form action="" className="store-selector">
        {/* comments */}
        <h2>Please Enter A store</h2>
        <input
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
