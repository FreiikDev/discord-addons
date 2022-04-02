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
   * @description Emitted when default message notifications are changed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {String} The old settings
   * @param {String} The new settings
   * @example
   * client.on(event, async (guild, oldNotificationSettings, newNotificationSettings) => {
   *  console.log(`The guild with the id ${guild.id} updated notification settings (${oldNotificationSettings} => ${newNotificationSettings}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.defaultMessageNotifications !=
      newGuild.defaultMessageNotifications &&
    newGuild.defaultMessageNotifications != (null || undefined) &&
    oldGuild.defaultMessageNotifications != (null || undefined)
  )
    client.emit(
      event,
      newGuild,
      oldGuild.defaultMessageNotifications,
      newGuild.defaultMessageNotifications
    );
};
