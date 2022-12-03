const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
     name: "roleselector",
     category: "test",
     devOnly: true,
     run: async ({client, message, args}) => {
          message.channel.send({
               embeds: [
                    new EmbedBuilder().setTitle("Select Role").setDescription("Select roles from the buttons below").setColor("BLUE")
               ],
               components: [
                    new ActionRowBuilder().addComponents([
                         new ButtonBuilder().setCustomId("role-1048569647840112780").setStyle(1).setLabel("1")
                    ])
               ]
          })
     }
}