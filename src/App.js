import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import AppRoutes from 'Routes/AppRoutes';
import styles from 'Theme/styles';
import withRoot from './withRoot';

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
      component={withRoot(
        withStyles(styles, { withTheme: true })(AppContainer)
      )}
    />
  </Router>
);

export default App;
