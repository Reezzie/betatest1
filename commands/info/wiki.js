const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
  name: "wiki",
  cooldown: 8000,
  category: "info", 
  usage: "`a!wiki <query>`",
  description: "Returns the article from Wikipedia",
  run: async (client, message, args) => {
    const body = await fetch(

      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(

        args.join(" ")

      )}`

    ).then(res => res.json().catch(() => {}));

    if (!body)

      return message.channel.sendmessage.channel.send({

        embed: {

          color: "RANDOM",

          title: "❌ Error Page Not Found."

        }

      });

    if (body.title && body.title === "Not found.")

      return message.channel.send({

        embed: {

          color: "RANDOM",

          title: "❌ Error Page Not Found."

        }

      });

    const embed = new Discord.MessageEmbed()

      .setTitle(`🌐 ${body.title} `)

      .addField(

        "More Info: ",

        `**[Click Here!](${body.content_urls.desktop.page})**`,

        true

      )

      .setDescription(`** ${body.extract}**`)

      .setColor(`RANDOM`)
			.setFooter(`© ReeZie`, 'https://cdn.discordapp.com/attachments/776599793538957312/838113979998011432/rez.PNG')

      .setTimestamp();

    if (body.thumbnail) embed.setThumbnail(body.thumbnail.source);

    message.channel.send(embed);

  }

};