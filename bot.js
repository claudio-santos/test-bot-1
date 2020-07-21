/*
Dotenv is a zero-dependency module that loads environment variables from a .env
file into process.env. Storing configuration in the environment separate from
code is based on The Twelve-Factor App methodology.
https://www.npmjs.com/package/dotenv
*/
require('dotenv').config();

/*
discord.js is a powerful node.js module that allows you to interact with the
Discord API very easily. It takes a much more object-oriented approach than most
other JS Discord libraries, making your bot's code significantly tidier and
easier to comprehend.
https://discord.js.org/#/
*/
// Import the discord.js module
const Discord = require('discord.js');
// Create an instance of a Discord client
const client = new Discord.Client();

/*
The ready event is vital, it means that only _after_ this will your bot start
reacting to information received from Discord
*/
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

/*
Log our bot in using the token from
https://discordapp.com/developers/applications/me
*/
client.login(process.env.DISCORD_TOKEN);
