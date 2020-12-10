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
   * @description Emitted when the system channel is changed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {Discord:TextChannel} The old system channel
   * @param {Discord:TextChannel} The new system channel
   * @exemple
   * client.on(event, async (guild, oldSystemChannel, newSystemChannel) => {
   *  console.log(`The guild with the id ${guild.id} updated system channel (${oldSystemChannel} => ${newSystemChannel}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.systemChannelID != newGuild.systemChannelID &&
    newGuild.systemChannelID != (null || undefined) &&
    oldGuild.systemChannelID != (null || undefined)
  )
    return client.emit(
      event,
      newGuild,
      oldGuild.systemChannel,
      newGuild.systemChannel
    );
};
