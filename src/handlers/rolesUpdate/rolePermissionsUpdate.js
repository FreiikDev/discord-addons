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
   * @description Emitted when a role permissions is changed
   * @param {Discord:Role} Role
   * @param {Discord:Permissions} Old permissions
   * @param {Discord:Permissions} New permissions
   * @example
   * client.on(event, async (role, oldPermissions, newPermissions) => {
   *  console.log(`The role with the id ${role.id} updated his role permissions (${oldPermissions} => ${newPermissions}).`);
   * });
   */

  var client = oldChannel.client;
  if (
    oldChannel.type != "dm" &&
    oldChannel.permissionOverwrites !== newChannel.permissionOverwrites
  )
    client.emit(
      event,
      newChannel,
      oldChannel.permissionOverwrites,
      newChannel.permissionOverwrites
    );
};
