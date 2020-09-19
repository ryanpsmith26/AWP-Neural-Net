import React from 'react';
import { bounceIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

const Output = styled.div`
	animation: 2s ${keyframes`${bounceIn}`};
	text-align: center;
	font-size: 1.5rem;
	margin: 0.5em 0;
`;

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			result: ''
		};
		this.name = props.name;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(e) {
		e.preventDefault();
		let userInput = e.target.input.value;
		userInput = userInput.split(',');
		const dataInput = userInput.map((stringNum) => Number(stringNum));
		const { data: result } = await axios.put('/api/net/nums', dataInput);
		this.setState({ result });
	}

	render() {
		return (
			<React.Fragment>
				<p>Enter a comma separated number sequence between 1-20 and let an AI figure out the next number!</p>
				<form onSubmit={this.handleSubmit}>
					<label>Enter Sequence: </label>
					<input type="text" name="input" />
					<button type="submit">Submit</button>
				</form>
				{/* some magic to get the animation to work after mounting -- doesn't work on multiple submissions though */}
				{this.state.result === '' ? (
					''
				) : (
					<Output>
						<h1>{this.state.result}</h1>
					</Output>
				)}
			</React.Fragment>
		);
	}
}

export default Counter;
