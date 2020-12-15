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
   * @description Emitted when the afk channel is removed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {String} The old afk channel
   * @example
   * client.on(event, async (guild, oldAFKChannel) => {
   *  console.log(`The guild with the id ${guild.id} removed AFK channel (${oldAFKChannel}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.afkChannelID != newGuild.afkChannelID &&
    newGuild.afkChannelID == (null || undefined)
  )
    client.emit(event, newGuild, oldGuild.afkChannel);
};
