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
   * @description Emitted when a member stop his stream
   * @param {Discord:GuildMember} Guild member
   * @param {Discord:GuildVoiceChannel} Member channel
   * @example
   * client.on(event, async (member, channel) => {
   *  console.log(`The member with the id ${member.id} stopped his stream in ${Discord:GuildChannel}.`);
   * });
   */

  var client = oldState.client;
  if (oldState.streaming && !newState.streaming)
    client.emit(event, newState.member, newState.channel);
   }
