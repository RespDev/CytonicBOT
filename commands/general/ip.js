const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'general',
	data: new SlashCommandBuilder()
		.setName('ip')
		.setDescription('IP for our server.'),
	async execute(interaction) {
		await interaction.reply({ content: 'Connect to our server at: Comming soon!', ephemeral: true });
	},
};