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
   * @description Emitted when the rules channel is removed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {Discord:TextChannel} The old rules channel
   * @example
   * client.on(event, async (guild, oldRulesChannel) => {
   *  console.log(`The guild with the id ${guild.id} removed rules channel (${oldRulesChannel}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.rulesChannelID != newGuild.rulesChannelID &&
    newGuild.rulesChannelID == (null || undefined)
  )
    client.emit(event, newGuild, oldGuild.rulesChannel);
};
