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
   * @description Emitted when the system channel is added
   * @param {Discord:Guild} The guild where the changes were made
   * @param {Discord:TextChannel} The new system channel
   * @example
   * client.on(event, async (guild, newSystemChannel) => {
   *  console.log(`The guild with the id ${guild.id} added system channel (${newSystemChannel}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.systemChannelID != newGuild.systemChannelID &&
    oldGuild.systemChannelID == (null || undefined)
  )
    client.emit(event, newGuild, newGuild.systemChannel);
};
