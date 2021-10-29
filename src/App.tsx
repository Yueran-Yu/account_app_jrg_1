import React from 'react';
import {HashRouter as Router, Link, Switch, Route, Redirect} from "react-router-dom";
import styled from "styled-components";
import './index.scss';

const Wrapper = styled.div`
  border: 1px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  overflow: auto;
`

const UL = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  padding: 6px 16px;
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

				<UL>
					<li>
						<Link to='/money'>Money</Link>
					</li>
					<li>
						<Link to='/tags'>Tags</Link>
					</li>
					<li>
						<Link to='/statistics'>Statistics</Link>
					</li>
				</UL>
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