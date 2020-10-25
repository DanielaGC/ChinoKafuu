const Listener = require('../structures/events/Listener')
const Logger = require('../structures/util/Logger')

module.exports = class ReadyListener extends Listener {
	constructor() {
		super()

		this.event = 'ready'
	}

	on(client) {
		const game = [
			{
				name: 'Tokimeki Poporon',
				type: 2
			},
			{
				name: 'Daydream café',
				type: 2
			},
			{
				name: 'Gochuumon wa Usagi Desu Ka?',
				type: 3
			},
			{
				name: 'Okaeri to Rabbit House Coffee.',
				type: 0
			},
			{
				name: '🐦 Follow me in twitter: @ChinoKafuuBot',
				type: 0
			}
		]

		setInterval(() => {
			const status = Math.floor(Math.random() * game.length)
			client.editStatus('dnd', game[status])
		}, 5000)
		Logger.debug(`Logged as ${client.user.username}#${client.user.discriminator}`)
		Logger.info(`Shards from ${client.clusters.firstShardID} - ${Number(client.clusters.firstShardID) + Number(process.env.SHARDS_PER_CLUSTER)} are online.`)
	}
}