/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved Â©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
rgtthrth : rawes60457@edmondpt.com
*/

const XTroid = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*විධානයට පසුව වචනයක් ලියන්න"
const GG = "...."




if (Config.WORKTYPE == 'private') {

    XTroid.addCMD({ pattern: 'anime ?(.*)', fromMe: true}, (async (message, match) => {

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/randomloli`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    }));

}
else if (Config.WORKTYPE == 'public') {

    XTroid.addCMD({ pattern: 'anime ?(.*)', fromMe: false}, (async (message, match) => {

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/randomloli`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    }));


}
