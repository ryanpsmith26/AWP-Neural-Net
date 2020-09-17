import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Stack from './Stack';

ReactDOM.render(
	<div className="container">
		<h1>Machine Learning w/ Brain.js!</h1>
		<Counter />
		<Stack />
	</div>,
	document.getElementById('app')
);
