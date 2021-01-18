const sohda = require('sohda-api');

const connector = sohda.createConnector();

async function onMessage(author, message) {
  // this would be called by some kind of chat integration (twitch API, discord, etc)
  await connector.send('message', { author, message });
}
