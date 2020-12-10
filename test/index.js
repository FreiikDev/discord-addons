const { Client } = require("discord.js");
const { Events } = require("../index.js");
const client = new Client();

new Events(client);

// Ready

client.on("ready", async () => {
  console.log(`${client.user.tag} is ready !`);
});

// Guild name update

client.on("guildNameUpdate", async (guild, oldName, newName) => {
  console.log(
    `The guild with the id ${guild.id} updated his name (${oldName} => ${newName})`
  );
});

// Guild moderator channel

client.on("guildModeratorChannelAdd", async (guild, newChannel) => {
  console.log(
    `The guild with the id ${guild.id} added a moderator channel (${newChannel.name})`
  );
});

client.on("guildModeratorChannelRemove", async (guild, oldChannel) => {
  console.log(
    `The guild with the id ${guild.id} added removed the moderator channel (${oldChannel.name})`
  );
});

client.on(
  "guildModeratorChannelUpdate",
  async (guild, oldChannel, newChannel) => {
    console.log(
      `The guild with the id ${guild.id} updated his moderator channel (${oldChannel.name} => ${newChannel.name})`
    );
  }
);

// Guild icon

client.on("guildIconAdd", async (guild, newIcon) => {
  console.log(`The guild with the id ${guild.id} added a icon (${newIcon})`);
});

client.on("guildIconRemove", async (guild, newIcon) => {
  console.log(
    `The guild with the id ${guild.id} removed his icon (${newIcon})`
  );
});

client.on("guildIconUpdate", async (guild, oldIcon, newIcon) => {
  console.log(
    `The guild with the id ${guild.id} updated his icon (${oldIcon} => ${newIcon})`
  );
});

// Login

client.login("Token");
