const Discord = require('discord.js')
const {Client, GatewayIntentBits} = require('discord.js')
require("dotenv").config()

// Custom Imports
const generateImage = require('./Welcome/imageGenerator')


const client = new Discord.Client({
     intents: [
          GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.GuildMembers
     ]
})

client.on("ready", () => {
     console.log(`Logged in as ${client.user.tag}`)
})

const welcomeChannel = "1048462304297111563"

client.on("guildMemberAdd", async (member) => {
     const img = await generateImage(member)
     member.guild.channels.cache.get(welcomeChannel).send({
          content: `<@${member.id}> Welcome to the server!`,
          files: [img]
     })
})

client.login(process.env.TOKEN)