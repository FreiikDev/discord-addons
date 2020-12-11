const event = __filename
  .replace(__dirname, "")
  .split(".")
  .slice(0, -1)
  .join(".")
  .replace("/", "")
  .replace("\\", "");

module.exports = async (oldChannel, newChannel) => {
  /**
   * @event this
   * @description Emitted when a channel permissions is changed
   * @param {Discord:GuildTextChannel} Channel where change were made
   * @param {Discord:Permissions} Old permissions
   * @param {Discord:Permissions} New permissions
   * @example
   * client.on(event, async (channel, oldPermissions, newPermissions) => {
   *  console.log(`The channel with the id ${channel.id} updated his channel permissions (${oldPermissions} => ${newPermissions}).`);
   * });
   */

  var client = oldChannel.client;
  if (
    oldChannel.type != "dm" &&
    oldChannel.permissions !== newChannel.permissions
  )
    return client.emit(
      event,
      newChannel,
      oldChannel.permissions,
      newChannel.permissions
    );
};
