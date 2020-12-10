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
   * @description Emitted when a member leave voice channel
   * @param {Discord:GuildMember} Guild member
   * @param {Discord:GuildVoiceChannel} Old member channel
   * @exemple
   * client.on(event, async (member, oldChannel) => {
   *  console.log(`The member with the id ${member.id} left voice channel (${oldChannel}).`);
   * });
   */

  var client = oldState.client;
  if (oldState.channel && !newState.channel)
    return client.emit(event, newState.member, oldState.channel);
   }