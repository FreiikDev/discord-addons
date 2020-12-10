const { DiscordAPIError } = require("discord.js");

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
   * @description Emitted when a member has a removed role
   * @param {Discord:Guild} The guild where the changes were made
   * @param {Discord:GuildMember} Member
   * @param {Discord:Role} Role
   */

  var client = oldMember.client;
  oldMember.roles.cache.forEach((role) => {
    if (!newMember.roles.cache.has(role.id))
      return client.emit(event, newMember, role);
  });
};
