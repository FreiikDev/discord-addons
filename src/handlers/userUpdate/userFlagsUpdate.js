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
   * @description Emitted when a user updated his flags
   * @param {Discord:User} User
   * @param {Discord:UserFlags} Old flags
   * @param {Discord:UserFlags} New flags
   * @example
   * client.on(event, async (user, oldFlags, newFlags) => {
   *  console.log(`The user with the id ${user.id} updated his flags (${oldFlags} => ${newFlags}).`);
   * });
   */

  var client = oldUser.client;
  if (oldUser.flags != newUser.flags)
    return client.emit(event, newUser, oldUser.flags, newUser.flags);
};
