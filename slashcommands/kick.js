const run = async(client, interaction) => {
     let member = interaction.options.getMember("user")
     let reason = interaction.options.getString("reason") || "no reason"

     if(!member) {
          return interaction.reply("Invalid member...")
     }

     try {
          await member.guild.members.kick(member, reason)
          return interaction.reply(`${member.user.tag} has been kicked because "${reason}"...`)
     } catch(err) {
          if(err) {
               console.error(err)
               return interaction.reply(`Failed to kick ${member.user.tag}...`)
          }
     }
}

module.exports = {
     name: "kick",
     description: "Kick a member",
     perm: "KICK_MEMBERS",
     options: [
          {
               name: "user",
               description: "The user to kick",
               type: 6,
               required: true
          },
          {
               name: "reason",
               description: "Reason for kick",
               type: 3,
               required: false
          }
     ],
     run
}