import {Nav} from "./Nav/Nav";
import React, {useLayoutEffect, useState} from "react";
import styled from "styled-components";
import QRCodeView from "./QRCodeView/QRCodeView";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px dashed #e0e0e0;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;

`

interface WindowSize {
	width: number
	height: number
}

export const useWindowSize = (): WindowSize => {
	const [windowSize, setWindowSize] = useState<WindowSize>({width: 0, height: 0})

	useLayoutEffect(() => {
		function updateSize() {
			setWindowSize({width: window.innerWidth, height: window.innerHeight})
		}

		// set size at the first client-side load
		updateSize()
		window.addEventListener('resize', updateSize)

		//remove event listener on cleanup
		return () => {
			window.removeEventListener('resize', updateSize)
		}
	}, [])

	return windowSize
}

export const Layout = ({children, className}: any) => {
	const {width, height} = useWindowSize()

	/* Here is the second way to set the responsive height in mobile browser*/
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	//let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	//document.documentElement.style.setProperty('--vh', `${vh}px`);

	return (
		<>
			{width > 420 ?
				<QRCodeView/> :
				<Wrapper style={{height: height}}>
					<Main className={className}>
						{children}
					</Main>
					<Nav/>
				</Wrapper>
			}
		</>
	)
}
