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
   * @description Emitted when the guild splash is added
   * @param {Discord:Guild} The guild where the changes were made
   * @param {String} The new guild splash URL
   * @example
   * client.on(event, async (guild, newSplash) => {
   *  console.log(`The guild with the id ${guild.id} added splash (${newSplash}).`);
   * });
   */

  var client = newGuild.client;
  if (
    oldGuild.splash !== newGuild.splash &&
    newGuild.splash === (null || undefined)
  )
    client.emit(
      event,
      newGuild,
      newGuild.splashURL({
        format: "png",
        dynamic: true,
        size: 4096,
      })
    );
};
