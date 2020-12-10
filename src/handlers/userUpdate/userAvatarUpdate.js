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
   * @description Emitted when a user change his avatar
   * @param {Discord:User} User
   * @param {String} Old avatar URL
   * @param {String} New avatar URL
   * @exemple
   * client.on(event, async (user, oldAvatar, newAvatar) => {
   *  console.log(`The user with the id ${user.id} updated his avatar (${oldAvatar} => ${newAvatar}).`);
   * });
   */

  var client = oldUser.client;
  if (oldUser.avatar != newUser.avatar)
    return client.emit(event, newUser, oldUser.avatar, newUser.avatar);
};
