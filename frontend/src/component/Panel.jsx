import React, { Component } from 'react';
import {Card} from 'primereact/card';

class Panel extends Component {
	state = {  }

	constructor(props) {
		super(props);

		this.renderPanel = this.renderPanel.bind(this);
		this.renderStats = this.renderStats.bind(this)
	}

	renderStats(matchInfo, summoner) {
		var playerCard = [];
		for (var i = 0; i < matchInfo.participants.length; i++) {
			if (matchInfo.participantIdentities[i].player.summonerName === summoner) {
				playerCard.push(
					<div className="p-col" key={i}>
						<div className="p-col">
							Summoner Name: {matchInfo.participantIdentities[i].player.summonerName} 
							Champion: {matchInfo.participants[i].championId} 
							Spell 1: {matchInfo.participants[i].stats.spell1Id} 
							Spell 2: {matchInfo.participants[i].stats.spell2Id} 
							Primary Rune: {matchInfo.participants[i].stats.perkPrimaryStyle} 
							Keystone Rune: {matchInfo.participants[i].stats.perk0} 
						</div>
						<div className="p-col">
							>Kills: {matchInfo.participants[i].stats.kills} 
							>Deaths: {matchInfo.participants[i].stats.deaths} 
							>Assist: {matchInfo.participants[i].stats.assists} 
						</div>
						<div className="p-col">
							Trinket{matchInfo.participants[i].stats.item0} 
							Item 1: {matchInfo.participants[i].stats.item1} 
							Item 2: {matchInfo.participants[i].stats.item2} 
							Item 3: {matchInfo.participants[i].stats.item3} 
							Item 4: {matchInfo.participants[i].stats.item4} 
							Item 5: {matchInfo.participants[i].stats.item5} 
							Item 6: {matchInfo.participants[i].stats.item6} 
						</div>
						<div className="p-col">
							Champion Level: {matchInfo.participants[i].stats.champLevel} 
							Minions Killed: {matchInfo.participants[i].stats.totalMinionsKilled} 
							Minions Killed per Minuite: {matchInfo.participants[i].stats.totalMinionsKilled / (matchInfo.gameDuration / 60)} 
						</div>
					</div>
				)
			}
			else {
				playerCard.push(
					<div className="p-col" key={i}>
							Summoner Name: {matchInfo.participantIdentities[i].player.summonerName} 
							Champion: {matchInfo.participants[i].championId} 
					</div>
				)
			}
		}
		return playerCard;
	}

	renderPanel() {
		var summoner = this.props.name;
		var matchInfo = this.props.data;
		var panelMenu = []
		Object.keys(matchInfo).map((match) => (
			panelMenu.push(
				<Card key={match} style={{background: '#111', color: 'white'}} className="p-justify-center">
					<div className="p-col">
						{matchInfo[match].teams[1].win === 'Win' ? 'Victory' : 'Lose'} 
						{matchInfo[match].gameDuration / 60} minutes 
					</div>
					{this.renderStats(matchInfo[match], summoner)}
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