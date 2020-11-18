import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-info bg-info">
        <div className="container">
          <div className="navbar-brand font-weight-bold">
            <u>BLOGS ARE DUMB</u>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link btn btn-outline-dark rounded" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link btn btn-outline-dark rounded"
                to="/blog/add"
              >
                New Blog Post
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

interface INavbarProps {}

export default Navbar;
