const Discord = require('discord.js');

module.exports = {
	name: 'snipe',
	cooldown: 1000,
  category: ['moderation'],
	usage: '`a!snipe`',
	description: 'get the deleted message',
	aliases: ['s'],
	run: async (client, message, args) => {
		const msg = client.snipes.get(message.channel.id);
		if (!msg)
			return message.channel.send(
				'There are no deleted messages in this channel!'
			);
		const embed = new Discord.MessageEmbed()
			.setAuthor(msg.author)
			.setDescription(msg.content)
			.setColor('#8AFB17')
			.setThumbnail(
				'https://cdn.discordapp.com/attachments/776599793538957312/838113979998011432/rez.PNG'
			)
			.setFooter(
				'© ReeZie',
				'https://cdn.discordapp.com/attachments/776599793538957312/838113979998011432/rez.PNG'
			)
			.setTimestamp();
		if (msg.image) embed.setImage(msg.image);

		message.channel.send(embed);
	}
};
