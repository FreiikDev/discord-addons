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
   * @description Emitted when boosts downgrade
   * @param {Discord:Guild} The guild where the changes were made
   * @param {Number} Boosts number
   * @example
   * client.on(event, async (guild, oldBoostsNumber) => {
   *  console.log(`The guild with the id ${guild.id} has level down the number of boosts (${oldBoostsNumber}).`);
   * });
   */

  var client = oldGuild.client;
  if (oldGuild.premiumSubscriptionCount > newGuild.premiumSubscriptionCount)
    client.emit(event, newGuild, newGuild.premiumSubscriptionCount);
};
