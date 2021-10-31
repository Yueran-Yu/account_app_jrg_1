import {Nav} from "./Nav";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

export const Layout = ({children, className}: any) => {
	return (
		<Wrapper>
			<Main className={className}>
				{children}
			</Main>
			<Nav/>
		</Wrapper>
	)

}