const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');

module.exports = {
	name: 'reddit',
  cooldown: 10000,
	description: 'Shows pic from Reddit',
	aliases: ['reddit'],
  category: 'Fun',
	usage: '`a!reddit <search>`',
	accessableby: '',
	run: async (client, message, args) => {
		if (!args[0]) return message.reply("You didn't provide a SubReddit Name!");
		let { body } = await superagent
			.get(`https://www.reddit.com/r/${args}.json?sort=top&t=week`)
			.query({ limit: 800 });

		var allowed = message.channel.nsfw
			? body.data.children
			: body.data.children.filter(post => !post.data.over_18);
		if (!allowed.length)
			return message.reply('We are running out of  memes. 😂😂😂');
		var randomNumber = Math.floor(Math.random() * allowed.length);
		var embed = new MessageEmbed()
			.setColor('RANDOM')
			.setTitle(allowed[randomNumber].data.title)
			.setDescription(`**Author** - ${allowed[randomNumber].data.author}`)
			.setImage(allowed[randomNumber].data.url)
			.addField(
				'Information: ',
				'• **UpVotes:** ' +
					allowed[randomNumber].data.ups +
					' / • **Comments:** ' +
					allowed[randomNumber].data.num_comments
			)
			.setTimestamp()
			.setFooter(
				`© ReeZie `,
				'https://cdn.discordapp.com/attachments/776599793538957312/838113979998011432/rez.PNG'
			);
		return message.channel.send(embed);
	}
};