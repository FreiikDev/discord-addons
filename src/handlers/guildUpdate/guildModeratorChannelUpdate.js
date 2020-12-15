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
   * @description Emitted when the moderator channel is changed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {Discord:TextChannel} The old moderator channel
   * @param {Discord:TextChannel} The new moderator channel
   * @example
   * client.on(event, async (guild, oldModeratorChannel, newModeratorChannel) => {
   *  console.log(`The guild with the id ${guild.id} updated moderator channel (${oldModeratorChannel} => ${newModeratorChannel}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.publicUpdatesChannelID != newGuild.publicUpdatesChannelID &&
    newGuild.publicUpdatesChannelID != (null || undefined) &&
    oldGuild.publicUpdatesChannelID != (null || undefined)
  )
    client.emit(
      event,
      newGuild,
      oldGuild.publicUpdatesChannel,
      newGuild.publicUpdatesChannel
    );
};
