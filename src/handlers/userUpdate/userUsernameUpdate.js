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
   * @description Emitted when a user updated his username
   * @param {Discord:User} User
   * @param {String} Old username
   * @param {String} New username
   * @example
   * client.on(event, async (user, oldUsername, newUsername) => {
   *  console.log(`The user with the id ${user.id} updated his username (${oldUsername} => ${newUsername}).`);
   * });
   */

  var client = oldUser.client;
  if (oldUser.username != newUser.username)
    client.emit(event, newUser, oldUser.username, newUser.username);
};
