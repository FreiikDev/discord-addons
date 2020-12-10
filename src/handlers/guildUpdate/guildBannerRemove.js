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
   * @description Emitted when the guild banner is removed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {String} The old guild banner URL
   * @example
   * client.on(event, async (guild, oldBanner) => {
   *  console.log(`The guild with the id ${guild.id} removed banner (${oldBanner}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.banner !== (null || undefined) &&
    newGuild.banner === (null || undefined)
  )
    return client.emit(
      event,
      oldGuild,
      oldGuild.bannerURL({
        format: "png",
        dynamic: true,
        size: 4096,
      })
    );
};
