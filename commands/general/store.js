const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'general',
	data: new SlashCommandBuilder()
		.setName('store')
		.setDescription('Sends you a link to the bugreport forum.'),
	async execute(interaction) {
		await interaction.reply({ content: 'Purchase a rank at: Comming soon!', ephemeral: true });
	},
};