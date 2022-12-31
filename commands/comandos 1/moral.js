const Discord = require("discord.js");


const frases = [
    'Vá beber água, mantenha-se hidratado',
    'Que tal ir esticar as pernas?!',
    'Exercicios são muito bons para melhorar o funcionamento da mente',
    'Lembrou de manter uma boa alimentação?! ela é muito importante para a cabeça funfar direito',
    
]

const geraFrase = () =>{
    const randomIndex = Math.floor(Math.random() * frases.length);
    const listadefrases = frases[randomIndex];
    return listadefrases;
}



module.exports = {
    name: "ajuda", //Nome do comando
    aliases: [""], //sinonimos do comando

    run: async(client, message, args) => {

        let fraseExibida = geraFrase();


        let embed = new Discord.EmbedBuilder()
        .setColor("Random")
        .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription(`Olá ${message.author}, Como você está?`);

        let embed2 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription(`Talvez precise de uma pausa, ${fraseExibida}`);

        message.reply({ embeds: [embed]}).then(msg =>{
            setTimeout(() => {
                msg.edit({embeds : [embed2]})
                fraseExibida = geraFrase();
            }, 4000);
        })

    }
}