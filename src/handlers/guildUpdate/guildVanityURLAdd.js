const event = __filename
  .replace(__dirname, "")
  .split(".")
  .slice(0, -1)
  .join(".")
  .replace("/", "")
  .replace("\\", "");

module.exports = async (oldGuild, newGuild) => {
  /**
   * @event this
   * @description Emitted when the guild vanity is added
   * @param {Discord:Guild} The guild where the changes were made
   * @param {String} The new guild vanity URL
   * @exemple
   * client.on(event, async (guild, newVanity) => {
   *  console.log(`The guild with the id ${guild.id} added vanity url (${newVanity}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.vanityURLCode != newGuild.vanityURLCode &&
    oldGuild.vanityURLCode == (null || undefined)
  )
    return client.emit(event, newGuild, newGuild.vanityURLCode);
};
