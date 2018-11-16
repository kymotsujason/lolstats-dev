const _kayn = require('kayn');
const Kayn = _kayn.Kayn;
const REGIONS = _kayn.REGIONS;
const kayn = Kayn('RGAPI-3ed622e7-16c7-476c-95c2-8e8e91fba8e9')();

const main = async (res, req) => {
    const { accountId } = await kayn.Summoner.by.name('Contractz')
    // ^ default region is used, which is `na` unless specified in config
    const { matches, totalGames } = await kayn.Matchlist.by
		.accountID(accountId)
        .query({ season: 11, startIndex: 0, endIndex: 3 })
        .region(REGIONS.NORTH_AMERICA)

	const match = await Promise.all(matches.map((matchObj) => {
		return kayn.Match.get(matchObj.gameId)
	}))
	//console.log('actual matches:', matches)
	console.log(`total number of games: ${totalGames}`)
	res.send(match)
}

module.exports = function(app, req) {
	app.post('/api/lolstats', (req, res) => {
		main(res, req);
	});
};