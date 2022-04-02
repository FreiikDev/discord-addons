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
   * @description Emitted when a webhook is removed
   * @param {Discord:GuildTextChannel} Channel where change were made
   * @param {Number} The old number of webhooks
   * client.on(event, async (channel, oldWebhookNumber) => {
   *  console.log(`The channel with the id ${channel.id} removed webhook (${oldWebhookNumber}).`);
   * });
   */

  var client = oldChannel.client;
  if (
    oldChannel.type != "dm" && newChannel.type == "text" &&
    oldChannel.fetchWebhooks().size > newChannel.fetchWebhooks().size
  )
    client.emit(event, newChannel, newChannel.fetchWebhooks().size);
};
