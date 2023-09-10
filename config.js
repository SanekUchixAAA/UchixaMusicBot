module.exports = {
TOKEN: "MTE1MDM0NjgxMDkyNjMwOTM3Nw.Grzc7t.VGEyTMPw6l-DgPIaClQm79uXPMhgpHHvg82K8s",
ownerID: ["901397368354779137"], //write your discord user id. example: ["id"] or ["id1","id2"]
botInvite: "https://discord.com/api/oauth2/authorize?client_id=1150346810926309377&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Finvite%2FXMsMrMRCbH&response_type=code&scope=bot%20identify%20guilds%20gdm.join%20rpc.voice.read%20rpc.video.write%20rpc.activities.write%20messages.read%20applications.commands%20activities.read%20voice%20applications.commands.permissions.update%20dm_channels.read%20activities.write%20applications.store.update%20applications.builds.upload%20rpc.screenshare.read%20rpc.voice.write%20rpc%20guilds.join%20email%20connections%20rpc.notifications.read%20guilds.members.read%20rpc.video.read%20rpc.screenshare.write%20webhook.incoming%20applications.builds.read%20applications.entitlements%20relationships.read%20role_connections.write", //write your discord bot invite.
supportServer: "https://discord.gg/XMsMrMRCbH", //write your discord bot support server invite.
mongodbURL: "", //write your mongodb url.
status: '❤️ UchixaBot owner Uchixamemory ❤️',
commandsDir: './commands', //Please don't touch
language: "en", //en, tr, nl, pt, fr, ar, zh_TW, it, ja
embedColor: "ffa954", //hex color code
errorLog: "", //write your discord error log channel id.


sponsor: {
status: true, //true or false
url: "https://t.me/uchixamemory", //write your discord sponsor url.
},

voteManager: { //optional
status: false, //true or false
api_key: "", //write your top.gg api key. 
vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","pause","play","playlist","queue","resume","save","search","skip","stop","time","volume"], //write your use by vote commands.
vote_url: "", //write your top.gg vote url.
},

shardManager:{
shardStatus: false //If your bot exists on more than 1000 servers, change this part to true.
},

playlistSettings:{
maxPlaylist: 10, //max playlist count
maxMusic: 75, //max music count
},

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
},

voiceConfig: {
leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 10000000, //1000 = 1 second
},

},

maxVol: 150, //You can specify the maximum volume level.

}
}
