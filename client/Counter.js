import React from 'react';

import axios from 'axios';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			result: NaN
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(e) {
		e.preventDefault();
		const { data: result } = await axios.get('/api/net');
		this.setState({ result });
	}

	render() {
		console.log('counter state--->', this.state);
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Enter Sequence: </label>
				<input name="sequence-input" />
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default Counter;
