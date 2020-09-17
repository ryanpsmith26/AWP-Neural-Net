import React from 'react';
import ReactDOM from 'react-dom';
import { tada } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import Counter from './Counter';
import Stack from './Stack';

const Wrapper = styled.div`
	width: 80%;
	margin: 0 auto;
`;

const Title = styled.h1`
	animation: 2s ${keyframes`${tada}`};
	text-align: center;
	margin-bottom: 2em;
`;

const Section = styled.div`margin-bottom: 100px;`;

ReactDOM.render(
	<Wrapper>
		<Title>Machine Learning w/ Brain.js!</Title>
		<Section>{<Counter />}</Section>
		<Section>{<Stack />}</Section>
	</Wrapper>,
	document.getElementById('app')
);
