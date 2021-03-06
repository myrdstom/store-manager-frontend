import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export class ProductView extends Component {
  render() {
    const newUser = window.localStorage.getItem('username');
    console.log(newUser);

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h3 className="logo">Store Manager</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <ul className="navbar-nav mr-auto" />
          <form className="form-inline my-2 my-lg-0">
            {newUser && newUser === 'admin' ? (
              <Link to="/signup" className="nav-link" href="#">
                <h3> Sign Up</h3> <span className="sr-only">(current)</span>
              </Link>
            ) : (
              <Link to="/">
                <h3 style={{ display: 'none' }}> Sign Up</h3>
              </Link>
            )}
            <Link to="/login" className="nav-link" href="#">
              <h3>Login</h3>
            </Link>
          </form>
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
