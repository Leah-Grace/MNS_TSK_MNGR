import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  //console.log(props);
  // setTimeout(() => {
  //   props.history.push("/about");
  // }, 2000);
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke'Times</a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
