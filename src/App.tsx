import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './index.scss';
import Money from "./pages/Money";
import Statistics from "./pages/Statistics";
import Tags from "./pages/Tags";
import NotMatch from "./pages/NotMatch";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/money'>
					<Money/>
				</Route>
				<Route path='/tags'>
					<Tags/>
				</Route>
				<Route path='/statistics'>
					<Statistics/>
				</Route>
				<Redirect exact from='/' to='/money'/>
				<Route path='*'>
					<NotMatch/>
				</Route>
			</Switch>
		</Router>
	)
}

export default App;