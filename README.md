<p align="center"><img height="160" align="center" src="https://freiikdev.github.io/discord-addons/docs/img/logo.png" alt="logo"/></p>
<br>
<p align="center">
  <a href="https://npmjs.com/discord-addons/">
    <img height="20" alt="npm" src="https://badgen.net/badge/install/discord-addons/red?icon=npm" target="_blank" />
  </a>
  <a href="https://npmjs.com/discord-addons/">
    <img height="20" alt="dt" src="https://img.shields.io/npm/dt/discord-addons?color=orange" target="_blank" />
  </a>
  <a href="https://github.com/FreiikDev/discord-addons/">
    <img height="20" alt="gh" src="https://badgen.net/badge/Freiik/discord-addons/yellow?icon=github" target="_blank" />
  </a>
  <a href="https://npmjs.com/discord-addons/">
    <img height="20" alt="v" src="https://img.shields.io/npm/v/discord-addons?color=green" target="_blank" />
  </a>
  </br>
  </br>
  Exceptional additions of events for Discord.Js
</p>


# 📰 Instructions
- The package only work for V12 and highter
- Install discord-addons package ``npm install discord-addons discord.js``
- Import discord.js and discord-addons like : 
```js
const Discord = require("discord.js");
const { Events } = require("discord-addons");
const client = new Discord.Client();

new Events(client);

// Example with guildNameUpdate

client.on("guildNameUpdate", async (guild, oldName, newName) => {
  console.log(
    `The guild with the id ${guild.id} updated his name (${oldName} => ${newName})`
  );
});

// Login

client.login("Token");
```

Thanks to [D0wzy](https://github.com/D0wzy) 🎉