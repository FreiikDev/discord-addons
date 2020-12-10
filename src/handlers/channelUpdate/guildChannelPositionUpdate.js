const event = __filename
  .replace(__dirname, "")
  .split(".")
  .slice(0, -1)
  .join(".")
  .replace("/", "")
  .replace("\\", "");

module.exports = async (oldChannel, newChannel) => {
  /**
   * @event this
   * @description Emitted when a channel position is changed
   * @param {Discord:Role} Role
   * @param {Number} Old position
   * @param {Number} New position
   * @exemple
   * client.on(event, async (channel, oldPosition, newPosition) => {
   *  console.log(`The channel with the id ${channel.id} updated his channel position (${oldPosition} => ${newPosition}).`);
   * });
   */

  var client = oldChannel.client;
  if (oldChannel.type != "dm" && oldChannel.postion !== newChannel.postion)
    return client.emit(
      event,
      newChannel,
      oldChannel.postion,
      newChannel.postion
    );
};
