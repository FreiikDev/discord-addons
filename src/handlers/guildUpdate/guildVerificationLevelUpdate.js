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
   * @description Emitted when the level of verification is changed
   * @param {Discord:Guild} The guild where the changes were made
   * @param {String} The old verification level
   * @param {String} The new verification level
   * @example
   * client.on(event, async (guild, oldVerification, newVerification) => {
   *  console.log(`The guild with the id ${guild.id} updated verification level (${oldVerification} => ${newVerification}).`);
   * });
   */

  var client = oldGuild.client;
  if (
    oldGuild.verificationLevel != newGuild.verificationLevel &&
    newGuild.verificationLevel != (null || undefined) &&
    oldGuild.verificationLevel != (null || undefined)
  )
    return client.emit(
      event,
      newGuild,
      oldGuild.verificationLevel,
      newGuild.verificationLevel
    );
};
