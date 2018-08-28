import React from "react";

const Navbar = props => (
<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Clicky Game</h1>
    <p className="lead">Click an image to begin don't click the same image more than once.</p>
    <p className="lead">Score: {props.score}</p>
  </div>
</div>
);
export default Navbar;