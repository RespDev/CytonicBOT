const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'utility',
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Displays the ping of the CytonicMC Bot.'),
	async execute(interaction) {
		if (interaction.user.id === '950091757952057385') {
			await interaction.reply({ content: 'Pong!', ephemeral: true });
			return;
		}
		interaction.reply({ content: 'You do not have permission to execute this command!', ephemeral: true });
	},
};