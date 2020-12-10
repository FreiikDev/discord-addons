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
   * @description Emitted when boosts upgrade/downgrade
   * @param {Discord:Guild} The guild where the changes were made
   * @param {Number} Old boosts number
   * @param {Number} New boosts number
   * @example
   * client.on(event, async (guild, oldBoostsNumber, newBoostsNumber) => {
   *  console.log(`The guild with the id ${guild.id} updated boost level (${oldBoostsNumber} => ${newBoostsNumber}).`);
   * });
   */

  var client = oldGuild.client;
  if (oldGuild.premiumSubscriptionCount != newGuild.premiumSubscriptionCount)
    return client.emit(
      event,
      newGuild,
      oldGuild.premiumSubscriptionCount,
      newGuild.premiumSubscriptionCount
    );
};
