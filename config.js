const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0dGbk5iNDNGdXhCclpQY25aRkd3bWZGRjhLNkttdWxXVG1Vd2c0NXEwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkw0VTRTQ1FMdVcxQ0Y1VCtuRlp0ZEFSRGVXNVpQTVhtekJRVFhucEl3UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSFFKSlZKKzZQSDljdjFBTHNnMDhtbFIyZ1A1MFAvdUZOMmRKV3JYS2xFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvZEF4dUZ3R3FZdVdSSjU1MGdLMW93WWwzVlp4clp0TlA4VmprUk11aFJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVDV2drcTJEZlh4Q3BUWWtpZnFtVm54QWFWWU9tQk1OdVhqRTdGeWRKRlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndSRno0ZHllQ2NSYXZhdkNsQ1VWaEtYUEJqTFN5eU9KanZqOUFPR1E1Q1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURJOXI0cDA2dzhRbUVqYzdZYjY3ZEVONnlSTGUvaFdQdVNXaWFHZ0NGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVNCeU8zWDZLdi9IOFdrc2NJUGxKSHBaTEhMVnk1Y08vaUNXZGFwS2Ntbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZ5L2N5cXN0NzZSZnVxcDBlelJPMWtVS1NxSUExVWtTV2ZyRHRScWtlVzBFQ2pyeXJZZ0RKcUJxS1crZzgzd0gzbjl0M3pycGp1bUZaQks0TzQ5eWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc4LCJhZHZTZWNyZXRLZXkiOiI4dld2VmRvOUt1K0YydklDRnA3eHBzREtzcWxlQnBjMTJnRFhQUXZuY1ZvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJBWVRONkZTUiIsIm1lIjp7ImlkIjoiOTIzMjQ0Mjk0NjAzOjgxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTg2NzQ5NTIzMzYyMDI0OjgxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3Zya2VnQkVOZkkwY1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVC9UcGJqVDZBQkh1bG9NVUNNU0NuL25sbDlaaHYrODJrSnRFY0lyRnhERT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibE1UdC9ERlNxcWVaUTNPYUNIT1NPdWh6OFFxZlFvekNMak8rODZCTGNhemVZL1JGN0Z4ZUJHMEtGRjFjSlgvWWdqLzZ0RGo3aFhKQVZvcCtyVVV4QlE9PSIsImRldmljZVNpZ25hdHVyZSI6Imd2NWpCUHd0L0RrOW94djhpZlBlMEtFKzRWK1NTdUdhYUJjZ2FkSGlBNSsyWkVYaW9YalJEVnQ3L216VDFBek1nT0FiWW9pU24zeXVaSWlOSSs0empnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjQ0Mjk0NjAzOjgxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlUvMDZXNDArZ0FSN3BhREZBakVncC81NVpmV1liL3ZOcENiUkhDS3hjUXgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjY1MjYzNSwibGFzdFByb3BIYXNoIjoiUFdrNUIifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || "+",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ᴷᴵᴺᴳ ᴬᴮᵁᴮᴬᴷᴬᴿ ᴴᴬᶜᴷᴱᴿ",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923244294603",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "KING ABUBAKAR HACKER",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴷᴵᴺᴳ ᴬᴮᵁᴮᴬᴷᴬᴿ ᴴᴬᶜᴷᴱᴿ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *𝐊𝐈𝐍𝐆 𝐀𝐁𝐔𝐁𝐀𝐊𝐀𝐑 𝐇𝐀𝐂𝐊𝐄𝐑*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923244294603",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS ᴷᴵᴺᴳ ᴬᴮᵁᴮᴬᴷᴬᴿ ᴴᴬᶜᴷᴱᴿ IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
