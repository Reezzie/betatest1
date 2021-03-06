const client = require("nekos.life");
const Discord = require("discord.js");
const neko = new client();

module.exports = {
  name: "hug",
 category: 'Fun',
  description: "hugs a mentioned user",
  usage: "[command] + [user]",
  run: async (client, message, args) => {
    //command to hug a person

    const user = message.mentions.users.first();
    if (!user) return message.reply("Mention someone to hug");

    async function work() {
      let owo = await neko.sfw.hug();

      const hugembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been hugged! ")
        .setDescription(
          user.toString() + " got hugged by " + message.author.toString()
        )
        .setImage(owo.url)
        .setColor(`#000000`)
        .setURL(owo.url);
      message.channel.send(hugembed);
    }

    work();
  }
};