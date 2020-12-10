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
   * @description Emitted when the guild icon is changed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {String} The old guild icon URL
   * @param {String} The new guild icon URL
   * @example
   * client.on(event, async (guild, oldIcon, newIcon) => {
   *  console.log(`The guild with the id ${guild.id} updated Icon (${oldIcon} => ${newIcon}).`);
   * });
   */

  var client = oldGuild.client;
  if (oldGuild.icon != newGuild.icon && newGuild.icon != (null || undefined))
    return client.emit(
      event,
      newGuild,
      oldGuild.iconURL({
        format: "png",
        dynamic: true,
        size: 4096,
      }),
      newGuild.iconURL({
        format: "png",
        dynamic: true,
        size: 4096,
      })
    );
};
