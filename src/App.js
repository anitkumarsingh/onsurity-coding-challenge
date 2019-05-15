import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import AppRoutes from 'routes/AppRoutes';

const AppContainer = () => (
  <Router>
    <div>
      <Route component={NavBar} />
      <div className="App">
        <Switch>
          <Route path="/" component={AppRoutes} />
        </Switch>
      </div>
      <Route component={Footer} />
    </div>
  </Router>
);

const App = () => (
  <Router>
    <Route
      component={AppContainer}
    />
  </Router>
);

export default App;
