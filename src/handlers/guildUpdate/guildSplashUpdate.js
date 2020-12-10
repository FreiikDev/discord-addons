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
   * @description Emitted when the guild splash is changed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {String} The old guild splash URL
   * @param {String} The new guild splash URL
   * @example
   * client.on(event, async (guild, oldSplash, newSplash) => {
   *  console.log(`The guild with the id ${guild.id} updated splash (${oldSplash} => ${newSplash}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.splash != newGuild.splash &&
    newGuild.splash != (null || undefined)
  )
    return client.emit(
      event,
      newGuild,
      oldGuild.splashURL({
        format: "png",
        dynamic: true,
        size: 4096,
      }),
      newGuild.splashURL({
        format: "png",
        dynamic: true,
        size: 4096,
      })
    );
};
