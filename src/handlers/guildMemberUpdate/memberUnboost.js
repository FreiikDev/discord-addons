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
   * @description Emitted when a member unboosted
   * @param {Discord:Guild} The guild where the changes were made
   * @param {Discord:GuildMember} Member
   */

  var client = oldMember.client;
  if (oldMember.premiumSince && !newMember.premiumSince)
    return client.emit(event, newMember);
};
