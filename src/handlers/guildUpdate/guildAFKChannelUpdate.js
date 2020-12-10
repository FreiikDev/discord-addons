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
   * @description Emitted when the afk channel is changed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {Discord:GuildTextChannel} The old afk channel
   * @param {Discord:GuildTextChannel} The new afk channel
   * @example
   * client.on(event, async (guild, oldAFKChannel, newAFKChannel) => {
   *  console.log(`The guild with the id ${guild.id} updated AFK channel (${oldAFKChannel} => ${newAFKChannel}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.afkChannelID != newGuild.afkChannelID &&
    newGuild.afkChannelID != (null || undefined) &&
    oldGuild.afkChannelID != (null || undefined)
  )
    return client.emit(
      event,
      newGuild,
      oldGuild.afkChannel,
      newGuild.afkChannel
    );
};
