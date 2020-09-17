import React from 'react';
import axios from 'axios';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			result: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(e) {
		e.preventDefault();
		let userInput = e.target.input.value;
		userInput = userInput.split(',');
		const dataInput = userInput.map((stringNum) => Number(stringNum));
		const { data: result } = await axios.put('/api/net', dataInput);
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
				<h1>{this.state.result}</h1>
			</React.Fragment>
		);
	}
}

export default Counter;
