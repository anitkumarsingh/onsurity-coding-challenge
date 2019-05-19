import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Claims from '../pages/Claims';
import ContactUs from '../pages/ContactUs';

class App extends Component {
  render() {
    const { match } = this.props;
       return (
        <Switch>
          <Route path={`${match.path}about-us`} component={AboutUs} />
          <Route path={`${match.path}/`} component={Home}/>
          <Route path={`${match.path}claims`} component={Claims}/>
          <Route path={`${match.path}contact-us`} component={ContactUs}/>
        </Switch>
    );
  }
}

export default (App);
