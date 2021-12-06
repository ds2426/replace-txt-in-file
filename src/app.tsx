import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import * as Loadables from './loadables';
import { Routes } from '@utilities';

import './assets/styles/app.scss';


const App = () => (
		<Router>
		  <Switch>
			<Route exact path={Routes.BASE} component={Loadables.Home} />
			<Route component={Loadables.NotFound} />
			</Switch>
		</Router>
	  );

export default hot(module)(App)
  
