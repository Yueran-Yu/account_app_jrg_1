import styled from "styled-components";
import React from "react";
import {Icon} from './Icon';

const fontMain = '\'Abel\', sans-serif;'

export const NavWrapper = styled.ul`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  padding: 6px 16px;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  font-family: ${fontMain};
  background-color: white;

  @media screen and (min-width: 770px) {
		width:498px;
    left: 50%;
    transform: translateX(-50%);
  }
	

  > li > a {
    display: flex;

    .icon {
      width: 24px;
      height: 24px;
    }

    &.selected {
      .icon {
        fill: #5678de;
      }
    }
  }
}
`

export const Nav = () => {
	return (
		<NavWrapper>
			<li>
				<Icon name='list'/>
			</li>
			<li>
				<Icon name='money'/>
			</li>
			<li>
				<Icon name='statistics'/>
			</li>
		</NavWrapper>
	)
}