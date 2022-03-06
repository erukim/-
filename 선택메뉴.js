const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("testmenu")
    .setDescription("유저 정보를 봅니다!"),
  async execute(interaction) {
      const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                        .setCustomId("s1")
                        .setMaxValues(1)
                        .setMinValues(1)
                        .setOptions([
                            {
                                label: "select 1",
                                value: "1"
                            },
                            {
                                label: "select 2",
                                value: "2"
                            }
                        ])
                )
    interaction.reply({ content: "here!", components: [row] });
    if (interaction.isSelectMenu()) {
        if (interaction.CustomId == "s1") {
            interaction.reply({ content: "select" + interaction.values[0] });
        }
    }
  }
};
