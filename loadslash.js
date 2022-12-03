const Discord = require('discord.js')
const {Client, GatewayIntentBits} = require('discord.js')
require("dotenv").config()

const client = new Client({
     intents: [
          GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.GuildMembers,
          GatewayIntentBits.MessageContent
     ]
})

client.slashcommands = new Discord.Collection()

const guildId = "1048460519264227409"

let bot = {
     client,
     prefix: "r!",
     owners: ["893472338371313664"]
}

// Definition
client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)

// Calling
client.loadSlashCommands(bot, false)

client.on("ready", async () => {
     const guild = client.guilds.cache.get(guildId)
     
     if(!guild) {
          return console.error("Target guild not found...")
     }

     await guild.commands.set([...client.slashcommands.values()])
     console.log(`Successfully loaded in ${client.slashcommands.size} slash commands...`)
     process.exit(0)
})

client.login(process.env.TOKEN)