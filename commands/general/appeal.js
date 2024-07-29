const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'general',
	data: new SlashCommandBuilder()
		.setName('appeal')
		.setDescription('Sends you a link to the appeals forum.'),
	async execute(interaction) {
		await interaction.reply({ content: 'Appeal at: https://cytonic.net/forums/topics/PUNISHMENT_APPEALS', ephemeral: true });
	},
};