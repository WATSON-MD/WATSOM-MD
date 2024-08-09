//watson code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUdYT2dzdStEK1VGZnFmZCtjcnoxR212MWJaQk5pOFNOR3pYbHo3bExVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjhPaThDS2QxWWkwOEZZdG1hWURMQUdDY1Yvd3l4SmJ6M1kyVndObkJrcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjT2Q2R1pvaVZsbnd4bWc3WXQ4TjVrOWxpY1Q5aXJUOU05Yjl1MU56OTBzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwb2lCdHZrWWxqOE5EZklJamZwYWdISXNFbzdlaVlzYnZlUDJENHNYRFZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNHQ0JXbE13U1hzcGdFdkVyWkdpMmc1N0Jxc3h0RWJSSzd6ZGRkeXpaVms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitJaWQ0UDI2RzVnODZvNG5TRmVhNnh6bGxLNnFTSndlbWlYUFova2gwR2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVBIaHJXdHBMSU9JTWg5QlA1YmgreWg0VTEyc29MZFFjUlVFSG9OZ1ZWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkwrK042VlZ2alo1VElLMG9Hc3YydlIzcTJ6TmdudEgwckdTK1ZTNStodz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijc1MGtVd2NIeDUzNmU1eVJIWlVxWGp0ZkExdGxNRm4yWldhSVVmbDBTeDFHdFVKTWo5WmpyL2YweXlYSmJDZ2ZzMmZsUU0vOTZEU0pBOVEybUY4ZkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDksImFkdlNlY3JldEtleSI6Im15WmQ3bnNReFF4djlEbEtvOFBhLzBMMUYvVXlDWmxIOW4zY2lHaXh5b1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImYtSjFWckFRVDk2Y21kWU1aMWFhQkEiLCJwaG9uZUlkIjoiOWQ0OTY3NTUtZmNjMy00MmIxLTg4NTEtNDYyNWUyZWU5NWNiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1jQlQ1ZXdxM01jVDlSZ095eHY2eExMQlRNZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyM0hOOW5oNE9LVTNVY2dXenFaa2o1TkVqWjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMldEOExERjkiLCJtZSI6eyJpZCI6IjI2Mzc4OTYyMjc0Nzo4OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlhTcjdRR0VJMkIxYlVHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUXpqZGxkK3M2NWtBeXdQSzhmeHRCWUFGRng1NTJML09yS0xBeWZXMXkyMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWWZ6UHNLdTg0V29idG0yZnZJclFNK2dkdmV0WTRSeGlncWpnMDRtQnk4VjBaRGpGTVhJYXdSOUEzOUtkTWxaTkNrbHVLRHpyMnlDbG5raTdXa1RpQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IkxDOW5SaWZvZW0yWkNRTDJ0VXFxamJYUmJaYXZKU00vVElkbGVZVHNNZ2x1RGZ0M0R1Tkl2ZFh4dUJsVFRpV0Z4NFlGTzlQdWtWakpSbG56UDllSEN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzg5NjIyNzQ3Ojg4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVNNDNaWGZyT3VaQU1zRHl2SDhiUVdBQlJjZWVkaS96cXlpd01uMXRjdHQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMxNTQ1ODYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTVhCIn0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "263789622747";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/GhMPXS09/IMG-20240706-WA0126.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/NfTgXrKh/IMG-20240808-WA0006.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`WATSON-MD`",
  author: process.env.PACK_AUTHER || "WATSON-MD",
  packname: process.env.PACK_NAME || "Watsonxd",
  botname: process.env.BOT_NAME || "WATSON-MD",
  ownername: process.env.OWNER_NAME || "Watsonxd",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/WATSON-XD1/WATSOM-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajjzuB9sBI890YffB1b";
global.website = process.env.GURL || "https://chat.whatsapp.com/E0a2bl9wHYlCHuL35WBR88";
global.devs = "263789622747";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
