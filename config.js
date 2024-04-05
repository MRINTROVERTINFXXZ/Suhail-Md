const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="virtualacademycls@gmail.com"
global.location="Colombo,Sri Lanka."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://ggnothing57:<password>@infaz.wmcgvht.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/India";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "94705613713" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94705613713";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "94705613713";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "nul,94705613713";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94705613713";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_01_04_05_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUk3NmNaeWw1OE5jYnh4VVlyajhsZEVYVUs2ZklXTkJ5bjV5aUpYQXAxQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlorMlM4cVRFcllCUDYvcG1EdUQwaEhsZVN5NXBYb3FDYWxJc0RDN0tqV0U9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYUVGYkptNnYxSWQ0Q2M3anY1UGNURGUwYXJiMUUvbmtjdmJCUTg5MGVVYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkR6aVFxTXNFN2xBY3lZV040cWdXNXZESUh1c0J5NDZvM3F5dVBnWlp0bVk9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUpYb0xveW8yV2JuTWxFSFhydEplREN4cWtMQS9YamtyalZBQ3o1S3MyMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInJhMkRFbFYvdXBack1Kb1NkME9LczVRRlJGcktSUDB5QWd3ZldNMXMwRkk9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIrTEtlcHBVMUpZQUFsNHRaeE5xWGxBWUhoWWl1Q3NINFFxL2FoL2djZUcwPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic1h1bHozSmczTEdKOU1vRklCaWFDcVp2UnBvZFJoNysvTHZQTzdnWmFBRT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJIR29VRzRoZVJlK0hZcWMxeUxBY3VlZ0pGNmVUZmJjWnVFUWUvRlZOcE5RaFk4aDd5YVA3Z01Xd3Z6UlpPQW9TazlEMURMYjJUaGhpQVN1OStQdTloUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjM2LFwiYWR2U2VjcmV0S2V5XCI6XCJzWm5YZTdyOGZiZHhmSktyb1U1QkhDTFg2aGVsK3hDb1RRTUFzUXBqamRrPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTQ3MDU2MTM3MTNAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiQUFBNURBQjc3QTJCRTZCRTkyNUJGMEU3RkI1MkFEQjVcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMjM1MDg2OH0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5NDcwNTYxMzcxM0BzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCJENkY3NkFGNzNGOEVEREQ2RDYyRDdEODg4REFDQjU0Q1wifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzEyMzUwODY4fV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjoxLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiNlBoSFFJcjVURWFvTkZIcHRQV3c5d1wiLFwicGhvbmVJZFwiOlwiMGU3M2MyOWMtYzQ2ZS00MmVlLWFkMTAtYjU3NGRlYmY0NjhiXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJsQzViSWREM0s2T284bGVNck43OWVKenJDYnM9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNk5YWitjM21NL0w2UEZUbSt0a3IzRVNyWVdBPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIjJETk1XMTVKXCIsXCJtZVwiOntcImlkXCI6XCI5NDcwNTYxMzcxMzo0QHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCJNUl9JTlRST1ZFUlRcIixcImxpZFwiOlwiMTcyNzc4MzgwNjQ4NjI4OjRAbGlkXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNJK1c0MnNRaTgzQnNBWVlBU0FBS0FBPVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiRFlJRnpQcVN3ZnlBWCt6cW1LblJtNGVzeWEyaHBVN0tzZGN0VkR6ZXppTT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIi9Ca00reUhRZGNWbXprdmtodU1aRk16QlkzNDl1VG1mWjhtVmJ6d1FBb25ERE5mek11cUlqNlMxbG1QYjN5Wnk5K3puaEdtUnhyKzdkeGJESXRYaEJBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiTGhlSFFOcXNvcExBU3RvMHlxRlBwSnhWMzRFa3lhTFd0Q3libHFEMXVaclhhK2M2N2JjdndaNzd6azJsSnpCbytXU3Q2UWJTemRJTGx0RFVKVDdsanc9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjk0NzA1NjEzNzEzOjRAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCUTJDQmN6NmtzSDhnRi9zNnBpcDBadUhyTW10b2FWT3lySFhMVlE4M3M0alwifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTIzNTA4NjQsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBUDRjXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDRjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZGV6d25IeUJEWlhjUDdZb3FLeVMySWZ2MXhOL1RwVGhFQWZYbzZhQjVSND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjYwMjAxMTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjM1MDg2NjAxOVwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "patch 1",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
