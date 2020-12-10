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
   * @description Emitted when the guild icon is added
   * @param {Discord:Guild} The guild where the changes were made
   * @param {String} The new guild icon URL
   * @example
   * client.on(event, async (guild, newIcon) => {
   *  console.log(`The guild with the id ${guild.id} added icon (${newIcon}).`);
   * });
   */

  var client = oldGuild.client;
  if (oldGuild.icon !== newGuild.icon && newGuild.icon !== (null || undefined))
    return client.emit(
      event,
      newGuild,
      newGuild.iconURL({
        format: "png",
        dynamic: true,
        size: 4096,
      })
    );
};
