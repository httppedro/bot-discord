const Discord = require("discord.js");

module.exports = {
    name: "ping", //Nome do comando
    aliases: [""], //sinonimos do comando

    run: async(client, message, args) => {


        let embed = new Discord.EmbedBuilder()
        .setColor("Random")
        .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription(`Olá ${message.author}, seu ping está em : \`carregando...\`.`);

        let embed2 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription(`Olá ${message.author}, seu ping está em : \`${client.ws.ping}ms\`.`);

        message.reply({ embeds: [embed]}).then(msg =>{
            setTimeout(() => {
                msg.edit({embeds : [embed2]})
            }, 3000);
        })

    }
}