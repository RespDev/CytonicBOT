const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'general',
	data: new SlashCommandBuilder()
		.setName('apply')
		.setDescription('Sends you a link to the staff applications forum.'),
	async execute(interaction) {
		await interaction.reply({ content: 'Apply at: Comming soon!', ephemeral: true });
	},
};