import React from 'react';
import axios from 'axios';

class Stack extends React.Component {
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
		const { data: result } = await axios.put('/api/net/stack', { input: userInput });
		this.setState({ result });
	}

	render() {
		return (
			<React.Fragment>
				<p>
					Enter something you've learned how to do at FSA and let an AI figure out which part of the stack
					you're talking about!
				</p>
				<form onSubmit={this.handleSubmit}>
					<label>Enter Sentence: </label>
					<input type="text" name="input" />
					<button type="submit">Submit</button>
				</form>
				<h1>{this.state.result}</h1>
			</React.Fragment>
		);
	}
}

export default Stack;
