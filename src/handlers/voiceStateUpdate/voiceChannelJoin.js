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
   * @description Emitted when a member join voice channel
   * @param {Discord:GuildMember} Guild member
   * @param {Discord:GuildVoiceChannel} Old member channel
   * @example
   * client.on(event, async (member, newChannel) => {
   *  console.log(`The member with the id ${member.id} join voice channel (${newChannel}).`);
   * });
   */

  var client = oldState.client;
  if (!oldState.channel && newState.channel)
    client.emit(event, newState.member, newState.channel);
};
