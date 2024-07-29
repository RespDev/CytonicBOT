const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
        // Log to console
        console.log(`CytonicMC discord bot is now running as: ${client.user.tag}`);

        // Set activity
        client.user.setActivity({
            name: 'CytonicMC',
            type: ActivityType.Watching,
        });

        // Send start notification
        const networkNotifications = client.channels.cache.get('1172576427300896818');
        networkNotifications.send("Successfully started **CytonicMC Bot**.")

        const maintenance = client.channels.cache.get('1244763159106158592');
        //maintenance.send("**CYTONIC MC:** *You can now expect the bot to resume normal services.*")
	},
};