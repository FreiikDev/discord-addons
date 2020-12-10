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
   * @description Emitted when the rules channel is changed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {Discord:TextChannel} The old rules channel
   * @param {Discord:TextChannel} The new rules channel
   * @example
   * client.on(event, async (guild, oldRulesChannel, newRulesChannel) => {
   *  console.log(`The guild with the id ${guild.id} updated rules channel (${oldRulesChannel} => ${newRulesChannel}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.rulesChannelID != newGuild.rulesChannelID &&
    newGuild.rulesChannelID != (null || undefined) &&
    oldGuild.rulesChannelID != (null || undefined)
  )
    return client.emit(
      event,
      newGuild,
      oldGuild.rulesChannel,
      newGuild.rulesChannel
    );
};
