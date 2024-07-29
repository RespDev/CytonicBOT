const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    category: 'moderation',
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Select a member and ban them.')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to ban')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for banning'))
		.setDMPermission(false),
	async execute(interaction) {
		if (interaction.user.id === '950091757952057385') {
            const target = interaction.options.getUser('target');
            const reason = interaction.options.getString('reason') ?? 'No reason provided';
    
            await interaction.reply(`Banning ${target.username} from CytonicMC for the reason: ${reason}`);
            await interaction.guild.members.ban(target);
			return;
		}
		interaction.reply({ content: 'You do not have permission to execute this command!', ephemeral: true });
	},
};