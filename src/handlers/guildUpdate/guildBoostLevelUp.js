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
   * @description Emitted when boosts upgrade
   * @param {Discord:Guild} The guild where the changes were made
   * @param {Number} Boosts number
   * @example
   * client.on(event, async (guild, newBoostsNumber) => {
   *  console.log(`The guild with the id ${guild.id} has level up the number of boosts (${newBoostsNumber}).`);
   * });
   */

  var client = oldGuild.client;
  if (oldGuild.premiumSubscriptionCount < newGuild.premiumSubscriptionCount)
    return client.emit(event, newGuild, newGuild.premiumSubscriptionCount);
};
