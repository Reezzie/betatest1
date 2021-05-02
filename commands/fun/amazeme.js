/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */

const discord = require('discord.js');

const got = require('got');

module.exports = {
	name: 'amazeme',
	cooldown: 10000,
	aliases: ["am", "ame"],
	category: 'Fun',
	usage: '`a!amazeme`',
  uimage:"",
	description: 'Returns random amazing fact/image.',

	run: async (client, message, args) => {
				got('https://www.reddit.com/r/interestingasfuck/random.json')
			.then(response => {
				let content = JSON.parse(response.body);

				var title = content[0].data.children[0].data.title;

				var amazeme = content[0].data.children[0].data.url;

				let wow = new discord.MessageEmbed()

					.setDescription(`**` + title + `**`)

					.setImage(amazeme)

					.setFooter(
						'© ReeZie',
						'https://cdn.discordapp.com/attachments/776599793538957312/838113979998011432/rez.PNG'
					)
					.setTimestamp()
					.setColor('RANDOM');

				message.channel.send(wow);
			})
			.catch(console.error);
	}
};
