const {
    Canvas
} = require('canvas-constructor');
const canvas = require('canvas');
const Discord = require ('discord.js');
module.exports = {
    name: "Shit",
		cooldown: 10000,
    description: 'take text and send shit one',
    aliases: ["shit"],
  category: ['image'],
    usage: '`a!shit @user`',
    accessableby: "",
    run: async (client, message, args) => {
        let msg = args.join(" ");
        if (!msg) {
            return message.channel.send("Well, what did you step in?");
        }
				if (message.mentions.users.size === 1) {
					return message.channel.send("we can't send mention's in shit bcz we do respect   ")
				}
        //write like const img = await canvas.loadImage('http://image.com');
        const img = await canvas.loadImage('https://media.discordapp.net/attachments/738997422377664585/793050103413080084/shit.png?width=396&height=560');

        //In .printImage you have o set image width and height according to you
        //in .setTextFont you have to set font size and font style
        let image = new Canvas(550, 557)
            .printImage(img, 0, 0, 369, 560)
            .setTextFont('14px Impact')
						.printText(msg, 110, 470)
				  	.toBuffer();
						 
      
        let attach = new Discord.MessageAttachment(image, "shit.png");
        message.channel.send(attach);
    }
};
