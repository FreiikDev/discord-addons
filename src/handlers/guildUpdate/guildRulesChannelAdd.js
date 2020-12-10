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
   * @description Emitted when the rules channel is added
   * @param {Discord:Guild} The guild where the changes were made
   * @param {Discord:TextChannel} The new rules channel
   * @example
   * client.on(event, async (guild, newRulesChannel) => {
   *  console.log(`The guild with the id ${guild.id} added rules channel (${newRulesChannel}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.rulesChannelID != newGuild.rulesChannelID &&
    oldGuild.rulesChannelID == (null || undefined)
  )
    return client.emit(event, newGuild, newGuild.rulesChannel);
};
