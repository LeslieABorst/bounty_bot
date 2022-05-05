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

//MAC SERVER
//Adding Color Roles

client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;
  console.log(reaction.message.channel.id);
  if (reaction.message.channel.id == '932516090184089670') {
     console.log(reaction.emoji.name);
     //red
      if (reaction.emoji.name === '❤️') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add('946067251570815037');
          console.log("new role added!");
      }
      //orange
      if (reaction.emoji.name === '🧡') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add('946067392545583145');
      }
      //green
      if (reaction.emoji.name === '💚') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add('946066958208598037');
      }
      //blue
      if (reaction.emoji.name === '💙') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add('946067357414076416');
      }
      //purple
      if (reaction.emoji.name === '💜') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add('946067121312497775');
      }
      //pink
    if (reaction.emoji.name === '💗') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('946067179378462800');
    }

  } else return;
});

//Removing Color Roles

client.on('messageReactionRemove', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.channel.id == '932516090184089670') {
    //red
      if (reaction.emoji.name === '❤️') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('946067251570815037');
      }
      //orange
      if (reaction.emoji.name === '🧡') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('946067392545583145');
      }
      //green
      if (reaction.emoji.name === '💚') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('946066958208598037');
      }
      //blue
      if (reaction.emoji.name === '💙') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('946067357414076416');
      }
      //purple
      if (reaction.emoji.name === '💜') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('946067121312497775');
      }
      //pink
      if (reaction.emoji.name === '💗') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('946067179378462800');
      }

  } else return;
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
  if (reaction.message.channel.id == '921571783411367946') {
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

//Adding Alert Role
client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;
  console.log(reaction.message.channel.id);
  if (reaction.message.channel.id == '921571783411367946') {
     console.log(reaction.emoji.name);
     //adding the role
      if (reaction.emoji.name === '🔔') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add('943623672336384032');
      }

  } else return;
});


//Removing Alert Role
client.on('messageReactionRemove', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.channel.id == '921571783411367946') {
    //remove the role
      if (reaction.emoji.name === '🔔') {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove('943623672336384032');
      }
  } else return;
});