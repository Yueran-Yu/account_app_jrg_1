import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import money from 'icons/money.svg';
import tags from 'icons/tags.svg';
import statistics from 'icons/statistics.svg';

const fontMain = '\'Abel\', sans-serif;'
export const NavWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  padding: 6px 16px;
  line-height: 24px; 
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  font-family: ${fontMain};
`

export const Nav = () => {
	return (
		<NavWrapper>
			<li>
				<Link to='/money'>
					<img src={money} alt=""/>
				</Link>
			</li>
			<li>
				<Link to='/tags'>
					<img src={tags} alt=""/>
				</Link>
			</li>
			<li>
				<Link to='/statistics'>
					<img src={statistics} alt=""/>
				</Link>
			</li>
		</NavWrapper>
	)
}