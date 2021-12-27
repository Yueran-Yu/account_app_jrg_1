import React from 'react';
import {NavLink} from "react-router-dom";
// require('icons/money.svg');
// require('icons/tags.svg');
// require('icons/statistics.svg');
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
	name: string
}

export const Icon = ({name}: Props) => {
	return (
		<NavLink to={`/${name}`} activeClassName='selected'>
			<svg className='icon'>
				<use xlinkHref={`#${name}`}/>
			</svg>
		</NavLink>
	)
}