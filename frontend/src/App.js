import React, { Component } from 'react';
import './App.css';
import Panel from './component/Panel';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

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
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({ post: this.state.post }),
		});
		const body = await response.json();
		this.setState({ responseToPost: body });
	  };
	render() {
		return (
			<div className="App">
				<form onSubmit={this.handleSubmit}>
			  	<p>
					<strong>Lolstat</strong>
			  	</p>
			  	<InputText 
				  	value={this.state.post}
				  	onChange={e => this.setState({ post: e.target.value })}
				/>
				<Button type="submit" label="Submit"/>
			</form>
			<div className="main_container">
				<Panel
					data = {this.state.responseToPost}
					name = {this.state.post}
				/>
			</div>
		  </div>
		);
	  }
	}

export default App;
