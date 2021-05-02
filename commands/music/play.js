module.exports = {
  name: "play",
  cooldown: 1000,
  aliases: ["p"],
  category: 'Music',
  
run: async(client, message, args) =>{
    if (!message.member.voice.channel)
      return message.channel.send({ embed: { description: "Make sure you join a voice channel first to play a song."}})

    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id !== message.guild.me.voice.channel.id
    )
      return message.channel.send({ embed: { description: "I'm already in a voice channel. Make sure you join that", color: "RANDOM"}})

    if (!args[0])
      return message.channel.send("Please give a song name or link.")
//where is the embed of song
    client.player.play(message, args.join(" "), { firstResult: true });
  }
};