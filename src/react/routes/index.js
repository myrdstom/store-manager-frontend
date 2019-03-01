import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HomeView from '../views/HomeView.js';
import AboutView from '../views/AboutView';
import Header from '../components/Header';

const Routes = () => (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={HomeView} />
        <Route exact path="/about" component={AboutView} />
      </div>
    </Router>
  );
  
  export default Routes;
