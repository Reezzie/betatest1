const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "announce",
  aliases: ["announce", "a"],
  category: "info",
  usage: "embed <text to say>",
  description: "Returns provided text in Embed form.",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGE"))
      return message.channel.send(`YOU DO NOT HAVE PERMISSION FRIEND`);
    //await message.delete()
    let say = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!say)
      return message.channel.send(`:x: |  + "I Cannot Repeat Blank Message"`);
    let embed = new MessageEmbed().setDescription(`${say}`).setColor("RANDOM");

    message.channel.send(embed);
  }
};
