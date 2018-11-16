import React, { Component } from 'react';
import './App.css';
import Panel from './component/Panel';

class App extends Component {
	state = {
		response: '',
		post: '',
		responseToPost: '',
	};

	handleSubmit = async e => {
		e.preventDefault();
		const response = await fetch('/api/lolstats', {
			method: 'POST',
		});
		const body = await response.json();
		this.setState({ responseToPost: body });
	};

	render() {
		return (
		<div className="App">
			<p>{this.state.response}</p>
			<form onSubmit={this.handleSubmit}>
			<p>
				<strong>Lolstats</strong>
			</p>
			<input
				type="text"
				value={this.state.post}
				onChange={e => this.setState({ post: e.target.value })}
			/>
			<button type="submit">Submit</button>
			</form>
			<div className="main_container">
				<Panel
					data = {this.state.responseToPost}
				/>
			</div>
		</div>
		);
	}
}

export default App;
