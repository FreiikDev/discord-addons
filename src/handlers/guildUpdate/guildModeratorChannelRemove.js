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
   * @description Emitted when the moderator channel is removed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {Discord:TextChannel} The old moderator channel
   * @example
   * client.on(event, async (guild, oldModeratorChannel) => {
   *  console.log(`The guild with the id ${guild.id} removed moderator channel (${oldModeratorChannel}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.publicUpdatesChannelID != newGuild.publicUpdatesChannelID &&
    newGuild.publicUpdatesChannelID == (null || undefined)
  )
    client.emit(event, newGuild, oldGuild.publicUpdatesChannel);
};
