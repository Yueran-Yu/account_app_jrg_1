import React from 'react';
import {HashRouter as Router, Link, Switch, Route, Redirect} from "react-router-dom";
import styled from "styled-components";
import './index.scss';
import {Nav} from 'components/Nav';


const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

const App = () => {
	return (
		<Router>
			<Wrapper>
				<Main>
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
				</Main>
				<Nav/>
			</Wrapper>
		</Router>
	)
}

const NotMatch = () => {
	return <h2>Not Match</h2>
}

const Money = () => {
	return <h2>Money Page</h2>
}

const Tags = () => {
	return <h2>Tags Page</h2>
}

const Statistics = () => {
	return <h2>Statistics Page</h2>
}

export default App;