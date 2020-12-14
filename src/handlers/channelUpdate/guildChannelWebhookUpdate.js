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
   * @description Emitted when the number of webhook is changed
   * @param {Discord:GuildTextChannel} Channel where change were made
   * @param {Number} The old number of webhooks
   * @param {Number} The new number of webhooks
   * @example
   * client.on(event, async (channel, oldWebhookNumber, newWebhookNumber) => {
   *  console.log(`The channel with the id ${channel.id} updated webhook (${oldWebhookNumber} => ${newWebhookNumber}).`);
   * });
   */

  var client = oldChannel.client;
  if (
    oldChannel.type != "dm" && newChannel.type != "voice" &&
    oldChannel.fetchWebhooks().size !== newChannel.fetchWebhooks().size
  )
    return client.emit(
      event,
      newChannel,
      oldChannel.fetchWebhooks().size,
      newChannel.fetchWebhooks().size
    );
};
