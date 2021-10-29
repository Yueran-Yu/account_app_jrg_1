import styled from "styled-components";
import React from "react";
import {Link} from "react-router-dom";

require('icons/money.svg');
require('icons/tags.svg');
require('icons/statistics.svg');


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
					<svg className='icon'>
						<use xlinkHref="#money"/>
					</svg>
				</Link>
			</li>
			<li>
				<Link to='/tags'>
					<svg className='icon'>
						<use xlinkHref="#tags"/>
					</svg>
				</Link>
			</li>
			<li>
				<Link to='/statistics'>
					<svg className='icon'>
						<use xlinkHref="#statistics"/>
					</svg>

				</Link>
			</li>
		</NavWrapper>
	)
}