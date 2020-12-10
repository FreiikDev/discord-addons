const event = __filename
  .replace(__dirname, "")
  .split(".")
  .slice(0, -1)
  .join(".")
  .replace("/", "")
  .replace("\\", "");

module.exports = async (oldMember, newMember) => {
  /**
   * @event this
   * @description Emitted when a user updated his nickname
   * @param {Discord:GuildMember} The guild where the changes were made
   * @param {String} The old nickname
   * @param {String} The new nickname
   */

  var client = oldMember.client;
  if (oldMember.nickname !== newMember.nickname)
    return client.emit(
      event,
      newMember,
      oldMember.nickname,
      newMember.nickname
    );
};
