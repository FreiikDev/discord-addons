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
   * @description Emitted when the moderator channel is added
   * @param {Discord:Guild} The guild where the changes were made
   * @param {Discord:TextChannel} The new moderator channel
   * @example
   * client.on(event, async (guild, newModeratorChannel) => {
   *  console.log(`The guild with the id ${guild.id} added moderator channel (${newModeratorChannel}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.publicUpdatesChannelID != newGuild.publicUpdatesChannelID &&
    oldGuild.publicUpdatesChannelID == (null || undefined)
  )
    client.emit(event, newGuild, newGuild.publicUpdatesChannel);
};
