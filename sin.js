const Discord = require("discord.js");
const client = new Discord.Client();
const TOKEN = "NDI2NjQzMjA4MzM2OTY1NjUz.DZZElg.cDCZqylD5tUD4vZc_w4W6Luj-1E";
const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }

  else{

	  	if(message.author.bot) return;

	  	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	 	const command = args.shift().toLowerCase();

	 	if(command == "say"){

	 			const sayMessage = args.join(" ");

	 			message.delete().catch(O_o =>{});

	 			message.channel.send(sayMessage);

	  	}
 	}
});

//client.login(process.env.ACCESS_KEY);
client.login(TOKEN);