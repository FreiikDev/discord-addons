const event = __filename
  .replace(__dirname, "")
  .split(".")
  .slice(0, -1)
  .join(".")
  .replace("/", "")
  .replace("\\", "");

module.exports = async (oldRole, newRole) => {
  /**
   * @event this
   * @description Emitted when a role position is changed
   * @param {Discord:Role} Role
   * @param {Number} Old position
   * @param {Number} New position
   * @example
   * client.on(event, async (role, oldPosition, newPosition) => {
   *  console.log(`The role with the id ${role.id} updated his role position (${oldPosition} => ${newPosition}).`);
   * });
   */

  var client = oldRole.client;
  if (oldRole.postion !== newRole.postion)
    client.emit(event, newRole, oldRole.postion, newRole.postion);
};
