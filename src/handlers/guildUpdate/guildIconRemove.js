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
   * @description Emitted when the guild icon is removed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {String} The old guild icon URL
   * @example
   * client.on(event, async (guild, oldIcon) => {
   *  console.log(`The guild with the id ${guild.id} removed icon (${oldIcon}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.icon !== (null || undefined) &&
    newGuild.icon === (null || undefined)
  )
    client.emit(
      event,
      oldGuild,
      oldGuild.iconURL({
        format: "png",
        dynamic: true,
        size: 4096,
      })
    );
};
