const event = __filename
  .replace(__dirname, "")
  .split(".")
  .slice(0, -1)
  .join(".")
  .replace("/", "")
  .replace("\\", "");

module.exports = async (oldGuild, newGuild) => {
  /**
   * @event this
   * @description Emitted when the guild name is changed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {String} The old guild name
   * @param {String} The new guild name
   * @example
   * client.on(event, async (guild, oldName, newName) => {
   *  console.log(`The guild with the id ${guild.id} updated name (${oldName} => ${newName}).`);
   * });
   */

  var client = oldGuild.client;
  if (oldGuild.name !== newGuild.name)
    client.emit(event, newGuild, oldGuild.name, newGuild.name);
};
