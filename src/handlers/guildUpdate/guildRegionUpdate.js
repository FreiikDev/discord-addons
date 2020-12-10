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
   * @description Emitted when the region is changed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {String} The old guild region
   * @param {String} The new guild region
   * @example
   * client.on(event, async (guild, oldRegion, newRegion) => {
   *  console.log(`The guild with the id ${guild.id} updated Region (${oldRegion} => ${newRegion}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.region != newGuild.region &&
    newGuild.region != (null || undefined)
  )
    return client.emit(event, newGuild, oldGuild.region, newGuild.region);
};
