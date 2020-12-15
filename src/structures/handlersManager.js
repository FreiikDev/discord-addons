const {readdirSync} = require("fs");

module.exports = class handlersManager {
  constructor(client) {
    this.client = client;
    var source = `${__dirname}/../handlers/`;
    readdirSync(source).forEach((dir) => {
      if (dir[0] != ".") {
        readdirSync(source + dir)
          .filter((f) => f.endsWith(".js"))
          .forEach((f, i) => {
            try {
              this.client.on(dir, require(`../handlers/${dir}/${f}`));
            } catch (error) {
              console.log(error);
            }
          });
      }
    });
  }
};
