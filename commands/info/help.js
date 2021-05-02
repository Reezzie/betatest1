const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'help',
	cooldown: 1000,
	run: async (client, message, args) => {
		if (args[0]) {
			const command = await client.commands.get(args[0]);
			const noemx = new MessageEmbed()
				.setDescription('Unknown Command: ' + args[0])
				.setColor('#FF2400');

			if (!command) {
				return message.channel.send(noemx);
			}
      
      let embed = new MessageEmbed()
				.setTitle(command.name)
				.setDescription(command.description ? command.description : 'Not Given')
				.addField('Aliases', command.aliases ? command.aliases : 'None')
				.addField('Usage', command.usage ? command.usage : 'Not Mentioned')
				.setImage(command.uimage)
				//.setThumbnail(client.user.displayAvatarURL())
				.setColor('RANDOM')
				.setFooter('ReeZie', client.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setDescription("ReeZie")
        .setColor("GREEN")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL());

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category.toUpperCase()}[${value.length}]`, desc);
      }

     

      return message.channel.send(emx);
    }
  }
};