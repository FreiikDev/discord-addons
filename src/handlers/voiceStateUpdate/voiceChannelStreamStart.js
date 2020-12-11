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
   * @description Emitted when a member start his stream
   * @param {Discord:GuildMember} Guild member
   * @param {Discord:GuildVoiceChannel} Member channel
   * @example
   * client.on(event, async (member, channel) => {
   *  console.log(`The member with the id ${member.id} started his stream in ${Discord:GuildChannel}.`);
   * });
   */

  var client = oldState.client;
  if (!oldState.streaming && newState.streaming)
    return client.emit(event, newState.member, newState.channel);
};
