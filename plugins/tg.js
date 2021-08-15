/*# Exclusively from danuma project 

# Do not use this fore any commercial thing

# If you abuse thais bot we wil kick you from bot 

# Do not edit (Respect to the Devaoloper) 

# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X

# Get more about devaoloper https://lasiya.ml

*/

const XTroid = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const Config = require('../config');

const Language = require('../language');

const Lang = Language.getString('tagall');
const ADMIN ="need admin"

async function checkImAdmin(message, user = message.client.user.jid) {

    var grup = await message.client.groupMetadata(message.jid);

    var sonuc = grup['participants'].map((member) => {

        if (member.jid.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;

    });

    return sonuc.includes(true);

}

XTroid.addCMD({pattern: 'tg ?(.*)', fromMe: true, desc: Lang.TAGALL_DESC }, (async (message, match) => {

    var im = await checkImAdmin(message);

    if (!im) return await message.client.sendMessage(message.jid,ADMIN,MessageType.text);

    if (match[1] !== '') {

        grup = await message.client.groupMetadata(message.jid);

        var jids = [];

        mesaj = '';

        grup['participants'].map(

            async (uye) => {

                mesaj += '@' + uye.id.split('@')[0] + ' ';

                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));

            }

        );

        await message.client.sendMessage(message.jid,`${match[1]}`, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})

    }

    else if (match[1] == '') {

        grup = await message.client.groupMetadata(message.jid);

        var jids = [];

        mesaj = '';

        grup['participants'].map(

            async (uye) => {

                mesaj += '@' + uye.id.split('@')[0] + ' ';

                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));

            }

        );

        await message.client.sendMessage(message.jid,mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})

    }

    else if (message.reply_message && match[1] == '') {

        grup = await message.client.groupMetadata(message.jid);

        var jids = [];

        mesaj = '';

        grup['participants'].map(

            async (uye) => {

                mesaj += '@' + uye.id.split('@')[0] + ' ';

                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));

            }

        );

        await message.client.sendMessage(message.jid,message.reply_message.text, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})

    }

}));
