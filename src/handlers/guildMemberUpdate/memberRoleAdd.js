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
   * @description Emitted when a member has a new role
   * @param {Discord:Guild} The guild where the changes were made
   * @param {Discord:GuildMember} Member
   * @param {Discord:Role} Role
   */

  var client = oldMember.client;
  newMember.roles.cache.forEach((role) => {
    if (!oldMember.roles.cache.has(role.id))
      return client.emit(event, newMember, role);
  });
};
