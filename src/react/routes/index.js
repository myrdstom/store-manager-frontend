import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import loginView from '../views/login/LoginView'
import SignUpView from '../views/signup/SignUpView';
import 'react-toastify/dist/ReactToastify.min.css'
import ProductView from '../views/products/ProductView'

const Routes = () => (
    <Router>
      <div>
        <Route exact path="/" component={loginView} />
        <Route exact path="/signup" component={SignUpView} />
        <Route exact path="/products" component={ProductView} />

        <ToastContainer />
      </div>
    </Router>
  );
  
  export default Routes;
