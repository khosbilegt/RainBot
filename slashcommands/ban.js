const run = async(client, interaction) => {
     let member = interaction.options.getMember("user")
     let reason = interaction.options.getString("reason") || "no reason"

     if(!member) {
          return interaction.reply("Invalid member...")
     }

     try {
          await member.guild.bans.create(member, {reason})
          return interaction.reply(`${member.user.tag} has been banned because "${reason}"...`)
     } catch(err) {
          if(err) {
               console.error(err)
               return interaction.reply(`Failed to ban ${member.user.tag}...`)
          }
     }
}

module.exports = {
     name: "ban",
     description: "Ban a member",
     perm: "BAN_MEMBERS",
     options: [
          {
               name: "user",
               description: "The user to ban",
               type: 6,
               required: true
          },
          {
               name: "reason",
               description: "Reason for ban",
               type: 3,
               required: false
          }
     ],
     run
}