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
   * @description Emitted when the system channel is removed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {Discord:TextChannel} The old system channel
   * @example
   * client.on(event, async (guild, oldSystemChannel) => {
   *  console.log(`The guild with the id ${guild.id} removed system channel (${oldSystemChannel}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.systemChannelID != newGuild.systemChannelID &&
    newGuild.systemChannelID == (null || undefined)
  )
    client.emit(event, newGuild, oldGuild.systemChannel);
};
