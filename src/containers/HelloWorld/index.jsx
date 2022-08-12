import React from "react";
import { Link } from "react-router-dom";

const HelloWorld = () => {
  return (
    <div>
      Hello World!
      <br />
      <Link to="/">Go back</Link>
    </div>
  );
};

export default HelloWorld;
