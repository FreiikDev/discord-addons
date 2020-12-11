const event = __filename
  .replace(__dirname, "")
  .split(".")
  .slice(0, -1)
  .join(".")
  .replace("/", "")
  .replace("\\", "");

module.exports = async (oldUser, newUser) => {
  /**
   * @event this
   * @description Emitted when a user updated his presence
   * @param {Discord:User} User
   * @param {Discord:Presence} Old presence
   * @param {Discord:Presence} New presence
   * @example
   * client.on(event, async (user, oldPresence, newPresence) => {
   *  console.log(`The user with the id ${user.id} updated his presence (${oldPresence} => ${newPresence}).`);
   * });
   */

  var client = oldUser.client;
  if (oldUser.presence != newUser.presence)
    return client.emit(event, newUser, oldUser.presence, newUser.presence);
};
