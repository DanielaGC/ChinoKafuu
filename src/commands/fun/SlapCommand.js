const Command = require('../../structures/command/Command')
const NekosLife = require('nekos.life')
const neko = new NekosLife()
const { EmbedBuilder } = require('../../utils')

module.exports = class SlapCommand extends Command {
    constructor() {
        super({
            name: 'slap',
            aliases: ['tapa'],
            arguments: 1,
            permissions: [{
                entity: 'bot',
                permissions: ['embedLinks']
            }]
        })
    }

    async run(ctx) {
        const member = ctx.message.mentions[0] || ctx.client.users.get(ctx.args[0])
        if (ctx.message.author.id === member.id) return ctx.replyT(':error:', 'commands:kiss.unable')
        const img = await neko.sfw.slap()
        const embed = new EmbedBuilder()
            .setColor('ACTION')
            .setDescription(ctx.t('commands:slap', { 0: ctx.message.author.mention, 1: member.mention }))
            .setImage(img.url)
        ctx.send(embed)
    }
}