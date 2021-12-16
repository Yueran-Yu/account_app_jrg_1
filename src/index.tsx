import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import TagListProvider from "./context/TagListContext/TagListProvider";

ReactDOM.render(
	<TagListProvider>
		<App/>
	</TagListProvider>
	, document.getElementById('root')
);

