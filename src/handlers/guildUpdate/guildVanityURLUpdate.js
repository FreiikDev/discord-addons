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
   * @description Emitted when the guild vanity is changed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {String} The old guild vanity URL
   * @param {String} The new guild vanity URL
   * @example
   * client.on(event, async (guild, oldVanity, newVanity) => {
   *  console.log(`The guild with the id ${guild.id} updated vanity url (${oldVanity} => ${newVanity}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.vanityURLCode != newGuild.vanityURLCode &&
    newGuild.vanityURLCode != (null || undefined)
  )
    return client.emit(
      event,
      newGuild,
      oldGuild.vanityURLCode,
      newGuild.vanityURLCode
    );
};
