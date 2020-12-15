const event = __filename
  .replace(__dirname, "")
  .split(".")
  .slice(0, -1)
  .join(".")
  .replace("/", "")
  .replace("\\", "");

module.exports = async (oldState, newState) => {
  /**
   * @event this
   * @description Emitted when a member start his camera
   * @param {Discord:GuildMember} Guild member
   * @param {Discord:GuildVoiceChannel} Member channel
   * @example
   * client.on(event, async (member, channel) => {
   *  console.log(`The member with the id ${member.id} started his camera in ${Discord:GuildChannel}.`);
   * });
   */

  var client = oldState.client;
  if (!oldState.selfVideo && newState.selfVideo)
    client.emit(event, newState.member, newState.channel);
};
