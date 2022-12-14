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

let bot = {
     client,
     prefix: "r!",
     owners: ["893472338371313664"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.slashcommands = new Discord.Collection()
client.buttons = new Discord.Collection()

// Definition
client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadButtons = (bot, reload) => require("./handlers/buttons")(bot, reload)

// Calling
client.loadEvents(bot, false)
client.loadCommands(bot, false)
client.loadSlashCommands(bot, false)
client.loadButtons(bot, false)

module.exports = bot

client.login(process.env.TOKEN)