import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ProductView extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          Store Manager
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto" />
            <form className="form-inline my-2 my-lg-0">
              <Link to="/signup" class="nav-link" href="#">
                Sign Up <span class="sr-only">(current)</span>
              </Link>
              <Link to="/" className="nav-link" href="#">
                Login
              </Link>
            </form>
          </div>
        </nav>
        <div className="jumbotron">
          <h1 className="display-4">Welcome to the Store Manager!!!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
        </div>
      </div>
    );
  }
}

export default ProductView;
