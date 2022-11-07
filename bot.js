const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
});
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log('Bot is ready');
});

client.on('message', (msg) => {
    if (msg.content === '?heart') {
      msg.channel.send(':heart:');
    }
  });

//AUTO PUBLISH

client.on('message', (message) => {
  const { channel } = message;
  if(channel.type == 'news') {
    message.crosspost();
    console.log('published news message');
  }

});

//CHII SERVER
//Adding Pronoun Roles
client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    console.log(reaction.message.channel.id);
    if (reaction.message.channel.id == '921571783411367946') {
       console.log(reaction.emoji.name);
       //he him
        if (reaction.emoji.name === '❤️') {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add('921572310203387965');
            console.log("new role added!");
        }
        //she her
        if (reaction.emoji.name === '🧡') {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add('921572729751240714');
        }
        //they them
        if (reaction.emoji.name === '💛') {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add('921572795455004714');
        }
        //she they
        if (reaction.emoji.name === '💚') {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add('921572846000554005');
        }
        //he they
        if (reaction.emoji.name === '💙') {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add('921572890258841620');
        }
        //she he they
        if (reaction.emoji.name === '💜') {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add('921572969040478239');
        }
        //it/its
      if (reaction.emoji.name === '🤎') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add('921573069238206505');
      }
      //other/ask
      if (reaction.emoji.name === '🖤') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add('821135990378463282');
      }
    } else return;
});

//Removing Pronoun Roles
client.on('messageReactionRemove', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.channel.id == '921571783411367946' ) {
    //he him
      if (reaction.emoji.name === '❤️') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('921572310203387965');
      }
      //she her
      if (reaction.emoji.name === '🧡') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('921572729751240714');
      }
      //they them
      if (reaction.emoji.name === '💛') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('921572795455004714');
      }
      //she they
      if (reaction.emoji.name === '💚') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('921572846000554005');
      }
      //he they
      if (reaction.emoji.name === '💙') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('921572890258841620');
      }
      //she he they
      if (reaction.emoji.name === '💜') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('921572969040478239');
      }
      //it/its
      if (reaction.emoji.name === '🤎') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('921573069238206505');
      }
      //other/ask
      if (reaction.emoji.name === '🖤') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('921573251409379398');
      }
  } else return;
});

//MICH AEROSPACE SERVER
//Adding Pronoun Roles
client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;
  console.log(reaction.message.channel.id);
  if (reaction.message.channel.id == '1039248289066930236') {
     console.log(reaction.emoji.name);
     //he him
      if (reaction.emoji.name === '❤️') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add('1039250964496011344');
          console.log("new role added!");
      }
      //she her
      if (reaction.emoji.name === '🧡') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add('1039250866672242708');
      }
      //they them
      if (reaction.emoji.name === '💛') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add('1039251092250312704');
      }
      //she they
      if (reaction.emoji.name === '💚') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add('1039251513102569602');
      }
      //he they
      if (reaction.emoji.name === '💙') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add('1039251588134469792');
      }
      //she he they
      if (reaction.emoji.name === '💜') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add('1039251631046402108');
      }
      //it/its
    if (reaction.emoji.name === '🤎') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('1039251819832021102');
    }
    //other/ask
    if (reaction.emoji.name === '🖤') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('1039251960118902896');
    }
  } else return;
});

//Removing Pronoun Roles
client.on('messageReactionRemove', async (reaction, user) => {
if (reaction.message.partial) await reaction.message.fetch();
if (reaction.partial) await reaction.fetch();
if (user.bot) return;
if (!reaction.message.guild) return;
if (reaction.message.channel.id == '1039248289066930236' ) {
  //he him
    if (reaction.emoji.name === '❤️') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('1039250964496011344');
    }
    //she her
    if (reaction.emoji.name === '🧡') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('1039250866672242708');
    }
    //they them
    if (reaction.emoji.name === '💛') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('1039251092250312704');
    }
    //she they
    if (reaction.emoji.name === '💚') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('1039251513102569602');
    }
    //he they
    if (reaction.emoji.name === '💙') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('1039251588134469792');
    }
    //she he they
    if (reaction.emoji.name === '💜') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('1039251631046402108');
    }
    //it/its
    if (reaction.emoji.name === '🤎') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('1039251819832021102');
    }
    //other/ask
    if (reaction.emoji.name === '🖤') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove('1039251960118902896');
    }
} else return;
});

//Adding Alert Role
// client.on('messageReactionAdd', async (reaction, user) => {
//   if (reaction.message.partial) await reaction.message.fetch();
//   if (reaction.partial) await reaction.fetch();
//   if (user.bot) return;
//   if (!reaction.message.guild) return;
//   console.log(reaction.message.channel.id);
//   if (reaction.message.channel.id == '921571783411367946') {
//      console.log(reaction.emoji.name);
//      //adding the role
//       if (reaction.emoji.name === '🔔') {
//         await reaction.message.guild.members.cache
//           .get(user.id)
//           .roles.add('943623672336384032');
//       }

//   } else return;
// });


// Removing Alert Role
// client.on('messageReactionRemove', async (reaction, user) => {
//   if (reaction.message.partial) await reaction.message.fetch();
//   if (reaction.partial) await reaction.fetch();
//   if (user.bot) return;
//   if (!reaction.message.guild) return;
//   if (reaction.message.channel.id == '921571783411367946') {
//     //remove the role
//       if (reaction.emoji.name === '🔔') {
//         await reaction.message.guild.members.cache
//           .get(user.id)
//           .roles.remove('943623672336384032');
//       }
//   } else return;
// });