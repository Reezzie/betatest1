const Discord = require("discord.js");

module.exports = {
    name: "editsnipe",
		cooldown:1000,
		usage:"`a!snipe`",
		description:"Get the last edited message",
    aliases: ["es"],
  category: ['moderation'],
run: async (client, message, args) =>{
  
  const msg = client.snipeedit.get(message.channel.id)
    if(!msg) return message.channel.send("There are no edited messages in this channel!")
    const embed = new Discord.MessageEmbed()
		.setTitle("edited message")
    .setAuthor(msg.author)
    .setDescription(msg.content)
		.setColor("RANDOM")
		.setThumbnail(client.user.displayAvatarURL())
    .setFooter('© ReeZie', 'https://cdn.discordapp.com/attachments/776599793538957312/838113979998011432/rez.PNG')
    .setTimestamp()
		if(msg.image)embed.setImage(msg.image)
    
    message.channel.send(embed)
  
  }
}