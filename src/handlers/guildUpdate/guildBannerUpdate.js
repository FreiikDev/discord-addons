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
   * @description Emitted when the guild banner is changed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {String} The old guild banner URL
   * @param {String} The new guild banner URL
   * @example
   * client.on(event, async (guild, oldBanner, newBanner) => {
   *  console.log(`The guild with the id ${guild.id} updated Banner (${oldBanner} => ${newBanner}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.banner != newGuild.banner &&
    newGuild.banner != (null || undefined)
  )
    return client.emit(
      event,
      newGuild,
      oldGuild.bannerURL({
        format: "png",
        dynamic: true,
        size: 4096,
      }),
      newGuild.bannerURL({
        format: "png",
        dynamic: true,
        size: 4096,
      })
    );
};
