import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-style">
          <a className="navbar-brand" href="/#">My shop</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link" href="/#">Dashboard</Link>
              </li>

              <li className="nav-item">
                <Link to="/Login" className="nav-link" href="/#">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link" href="/#">ShopingCartLink</Link>
              </li>
              <li className="nav-item">
                <Link to="/customers" className="nav-link" href="/#">CustomersMenuList</Link>
              </li>

            </ul>

          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default NavBar;