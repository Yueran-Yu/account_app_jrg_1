import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import TagsListProvider from "./context/TagListContext/TagsListProvider";

ReactDOM.render(
	<TagsListProvider>
		<App/>
	</TagsListProvider>
	, document.getElementById('root')
);

