import styled from "styled-components";
import React from "react";
import {Icon} from './Icon';


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
				<Icon name='money'/>
			</li>
			<li>
				<Icon name='tags'/>
			</li>
			<li>
				<Icon name='statistics'/>
			</li>
		</NavWrapper>
	)
}