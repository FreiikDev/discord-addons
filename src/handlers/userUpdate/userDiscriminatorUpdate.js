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
   * @description Emitted when a user change his discriminator
   * @param {Discord:User} User
   * @param {String} Old discriminator
   * @param {String} New discriminator
   * @example
   * client.on(event, async (user, oldDiscriminator, newDiscriminator) => {
   *  console.log(`The user with the id ${user.id} updated his discriminator (${oldDiscriminator} => ${newDiscriminator}).`);
   * });
   */

  var client = oldUser.client;
  if (oldUser.discriminator != newUser.discriminator)
    client.emit(
      event,
      newUser,
      oldUser.discriminator,
      newUser.discriminator
    );
};
