const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.once("ready", async () => {
  console.log(`✅ Bot zalogowany jako ${client.user.tag}`);

  const guild = await client.guilds.fetch("1324172996968976395");
  const channel = await guild.channels.fetch("1334166605143343144");

  setInterval(async () => {
    const members = await guild.members.fetch();
    const random = members.random();
    const avatar = random.user.displayAvatarURL({ size: 512, dynamic: true });

    channel.send({
      content: `🎯 Avatar losowego użytkownika: **${random.user.tag}**`,
      files: [avatar]
    });
  }, 1000 * 60 * 60); // co godzinę
});

client.login("MTM1OTIxMTAzNDkzNzkxNzY4MQ.GOMZDe.kvBnJ2185wG0Y3R0t2mgGjmE05UNOS3tlYjcRA");
