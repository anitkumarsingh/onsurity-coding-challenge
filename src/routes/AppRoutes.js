import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import Claims from '../Pages/Claims';
import ContactUs from '../Pages/ContactUs';

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
