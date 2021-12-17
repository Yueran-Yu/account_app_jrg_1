import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './index.scss';
import Money from "./pages/MoneyPage/Money";
import Statistics from "./pages/Statistics";
import ExpenditureList from "./pages/ExpenditureList";
import NotMatch from "./pages/NotMatch";
import TagListPage from "./pages/TagListPage/TagListPage";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/list'>
					<ExpenditureList/>
				</Route>
				<Route exact path='/money'>
					<Money/>
				</Route>
				<Route exact path='/tagList/:id'>
					<TagListPage/>
				</Route>
				<Route exact path='/statistics'>
					<Statistics/>
				</Route>
				<Redirect from='/' to='/money'/>
				<Route path='*'>
					<NotMatch/>
				</Route>
			</Switch>
		</Router>
	)
}

export default App;