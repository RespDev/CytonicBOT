const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'general',
	data: new SlashCommandBuilder()
		.setName('credits')
		.setDescription('Bot credits.'),
	async execute(interaction) {
		await interaction.reply({ content: 'I was created by ResTheCoder.', ephemeral: false });
	},
};