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
   * @description Emitted when a webhook is created
   * @param {Discord:GuildTextChannel} Channel where change were made
   * @param {Number} The new number of webhooks
   * @example
   * client.on(event, async (channel, newWebhookNumber) => {
   *  console.log(`The channel with the id ${channel.id} added webhook (${newWebhookNumber}).`);
   * });
   */

  var client = newChannel.client;
  if (
    newChannel.type != "dm" &&
    newChannel.fetchWebhooks().size < newChannel.fetchWebhooks().size
  )
    client.emit(event, newChannel, newChannel.fetchWebhooks().size);
};
