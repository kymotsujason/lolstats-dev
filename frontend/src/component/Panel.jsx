import React, { Component } from 'react';
import {Card} from 'primereact/card';

class Panel extends Component {
	state = {  }

	constructor(props) {
		super(props);

		this.renderPanel = this.renderPanel.bind(this);
	}

	renderPanel() {
		var matchInfo = this.props.data;
		var panelMenu = []
		Object.keys(matchInfo).map((match) => (
			panelMenu.push(
				<Card key={match} style={{background: '#111', color: 'white'}} className="p-grid">
					<div>
						{console.log(matchInfo[match])}
					</div>
				</Card>
			)
		))
		return panelMenu;
	}

	render() {
		if (this.props.data) {
			return (  
				<div className="p-col-6">
					{this.renderPanel()}
				</div>
			);
		}
		else {
			return (  
				<div className="p-col-6">
					Waiting...
				</div>
			);
		}
	}
}
 
export default Panel;