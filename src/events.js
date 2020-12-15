const HandlersManager = require("./structures/handlersManager.js");
const { Client } = require("discord.js");

module.exports = class events {
  constructor(client) {
    async () => {
      let login = await new Client().login(this.token).catch(() => {
        console.log(
          `The client connected to ${
            require("../package.json").name
          } is invalid.`
        );
      });
      login.destroy();
    };
    this.client = client;

    this.client.setMaxListeners(100);

    this.handlers = new HandlersManager(this.client);
  }
};
