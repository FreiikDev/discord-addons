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
   * @description Emitted when a member is undeafed
   * @param {Discord:GuildMember} Guild member
   * @param {Discord:GuildVoiceChannel} Old member channel
   * @param {Discord:GuildVoiceChannel} New member channel
   * @example
   * client.on(event, async (member, oldChannel, newChannel) => {
   *  console.log(`The member with the id ${member.id} switched voice channel (${oldChannel} => ${newChannel}).`);
   * });
   */

  var client = oldState.client;
  if (
    oldState.channel != newState.channel &&
    oldState.channel != null &&
    newState.channel != null
  )
    return client.emit(
      event,
      newState.member,
      oldState.channel,
      newState.channel
    );
};
