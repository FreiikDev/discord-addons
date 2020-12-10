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
   * @description Emitted when a member is muted
   * @param {Discord:GuildMember} Guild member
   * @param {Discord:GuildVoiceChannel} Member channel
   * @param {Discord:VoiceState} Voice state
   * @exemple
   * client.on(event, async (member, channel, status) => {
   *  console.log(`The member with the id ${member.id} updated his voice status (${status}) in the voice channel ${Discord:GuildChannel}.`);
   * });
   */

  var client = oldState.client;
  if (!oldState.mute && newState.mute)
    return client.emit(
      event,
      newState.member,
      newState.channel,
      newState.selfMute ? "self-muted" : "server-muted"
    );
};
