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
   * @description Emitted when the guild splash is removed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {String} The old guild splash URL
   * @example
   * client.on(event, async (guild, oldSplash) => {
   *  console.log(`The guild with the id ${guild.id} removed splash (${oldSplash}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.splash !== (null || undefined) &&
    newGuild.splash === (null || undefined)
  )
    client.emit(
      event,
      oldGuild,
      oldGuild.splashURL({
        format: "png",
        dynamic: true,
        size: 4096,
      })
    );
};
