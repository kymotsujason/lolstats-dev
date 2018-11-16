import React, { Component } from 'react';
import {Card} from 'primereact/card';

class Panel extends Component {
	state = {  }

	constructor(props) {
		super(props);

		this.renderPanel = this.renderPanel.bind(this);
		this.renderStats = this.renderStats.bind(this)
	}

	renderStats(matchInfo) {
		var playerCard = [];
		for (var i = 0; i < matchInfo.participants.length; i++) {
			playerCard.push(
				<div>
					<p>Summoner Name: {matchInfo.participantIdentities[i].player.summonerName}</p>
					<p>Spell 1: {matchInfo.participants[i].stats.spell1Id}</p>
					<p>Spell 2: {matchInfo.participants[i].stats.spell2Id}</p>
					<p>Primary Rune: {matchInfo.participants[i].stats.perkPrimaryStyle}</p>
					<p>Keystone Rune: {matchInfo.participants[i].stats.perk0}</p>
					<p>Champion: {matchInfo.participants[i].championId}</p>
					<p>Kills: {matchInfo.participants[i].stats.kills}</p>
					<p>Deaths: {matchInfo.participants[i].stats.deaths}</p>
					<p>Assist: {matchInfo.participants[i].stats.assists}</p>
					<p>Trinket{matchInfo.participants[i].stats.item0}</p>
					<p>Item 1: {matchInfo.participants[i].stats.item1}</p>
					<p>Item 2: {matchInfo.participants[i].stats.item2}</p>
					<p>Item 3: {matchInfo.participants[i].stats.item3}</p>
					<p>Item 4: {matchInfo.participants[i].stats.item4}</p>
					<p>Item 5: {matchInfo.participants[i].stats.item5}</p>
					<p>Item 6: {matchInfo.participants[i].stats.item6}</p>
					<p>Champion Level: {matchInfo.participants[i].stats.champLevel}</p>
					<p>Minions Killed: {matchInfo.participants[i].stats.totalMinionsKilled}</p>
					<p>Minions Killed per Minuite: {matchInfo.participants[i].stats.totalMinionsKilled / (matchInfo.gameDuration / 60)}</p>
				</div>
			)
		}
		return playerCard;
	}

	renderPanel() {
		var matchInfo = this.props.data;
		var panelMenu = []
		Object.keys(matchInfo).map((match) => (
			panelMenu.push(
				<Card key={match} style={{background: '#111', color: 'white'}} className="p-grid p-justify-center">
					<div>
						<p>{matchInfo[match].teams[1].win === 'Win' ? 'Victory' : 'Lose'}</p>
						<p>{matchInfo[match].gameDuration / 60} minutes</p>
						{this.renderStats(matchInfo[match])}
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