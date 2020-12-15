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
   * @description Emitted when the guild banner is added
   * @param {Discord:Guild} The guild where the changes were made
   * @param {String} The new guild banner URL
   * @example
   * client.on(event, async (guild, newBanner) => {
   *  console.log(`The guild with the id ${guild.id} added banner (${newBanner}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.banner !== newGuild.banner &&
    newGuild.banner != (null || undefined)
  )
    client.emit(
      event,
      newGuild,
      newGuild.bannerURL({
        format: "png",
        dynamic: true,
        size: 4096,
      })
    );
};
