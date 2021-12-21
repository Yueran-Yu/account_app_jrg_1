import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './index.scss';
import MoneyPage from "./pages/MoneyPage/MoneyPage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import NotMatch from "./pages/NotMatch";
import TagListPage from "./pages/TagListPage/TagListPage";
import AccountStatementPage from 'pages/AccountStatementPage/AccountStatementPage';
import StateDetailsPage from 'pages/StateDetails/StateDetailsPage';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/list'>
					<AccountStatementPage/>
				</Route>
				<Route exact path='/statementDetails/:id'>
					<StateDetailsPage/>
				</Route>
				<Route exact path='/money'>
					<MoneyPage/>
				</Route>
				<Route exact path='/tagList/:id'>
					<TagListPage/>
				</Route>
				<Route exact path='/statistics'>
					<StatisticsPage/>
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