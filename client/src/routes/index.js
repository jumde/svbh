import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home'
import Company from './Company'

export default () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Home}/>
			<Route path="/company" component={Company}/>
		</Switch>
	</BrowserRouter>
);
