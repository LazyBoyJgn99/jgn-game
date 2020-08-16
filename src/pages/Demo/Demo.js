import React, { Component } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
export default class Demo extends Component {
  render() {
    return (
      <div>
        Demo
        <Link to="/">home</Link>
      </div>
    );
  }
}
