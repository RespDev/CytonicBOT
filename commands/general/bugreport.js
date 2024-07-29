const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'general',
	data: new SlashCommandBuilder()
		.setName('bugreport')
		.setDescription('Sends you a link to the bugreport forum.'),
	async execute(interaction) {
		await interaction.reply({ content: 'Submit a bug report at: https://cytonic.net/forums/topics/BUG_REPORTS', ephemeral: true });
	},
};