//watson code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUp5MGJSR1dtM3RQVUh3N2cwY1gwdVFUbUdzT084TkpYQnhnSWI1cFZucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUVmcjkzRGQxOGIxTU40NXF5SG5KRHVvcnhZNlFyOVpZcUpqVU44Z3JDMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQVRZSzgyZS8vV2VmL2dQVzFJYlZSaUo4anJpd3VONFRpdFVFU2FDcG44PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuTzFRekJlUHhjeWRvUGlKa3ZRR3BySGJlUWVvODNSeC9JajhGVWVpMGdFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9MSlpPWDl3NzdKQkQ1LzV5VVU1WWJBbmZlbW9oZSsrSEVCSWF3SzNyMlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilh2RjRJVFRrbWh5WlNES0IrOXhZaWxIc1FkYW5JZFpkZ2Z3M2s4OXRmaE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0h6bW5UMGxBbXJUNUhhSDVVUUxqd04yeENGb3g5Y3MxNFU4dlNTaHQyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHM0eEZRRVpaZVBTOS83MEhneDVrNzU0YzhkMWFEMEMvSStrYldMSW9HST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjgzYkljcWVIQ05maTZxM0lNMTNiUGxLbnFNQ3lGeUNPZVZJbndVQ29SLy85QzlvWXo4S3lYRGQ0c1dyekEveGg0eFdzcVRhdzNyVVdDZmVlQ2plM2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUwLCJhZHZTZWNyZXRLZXkiOiI0cHJheEIvbTlKd01ucGFzd2dYRmNZc08yL2M2L28wM05BY2toakN3eTA4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKbHFkNkplOFNueW02ek0tdDk4VGJBIiwicGhvbmVJZCI6IjE3NzExNWQ1LWQ5M2QtNDIxZC04ZjQ0LTk3Y2Q3MDRiZmI2MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0K3daeG1IR0tMTC9hbHZGYldHQkljUlJiT2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2swVHR4Tkl3TVAvSjdJZ3htNlhmYS9MM3cwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZBNDNXNlJGIiwibWUiOnsiaWQiOiIyNjM3ODEzMzA3NDU6N0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTm5UdkdBUTQvN1h0UVlZQnlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOTRjd2lVdStHait4WDBpdXViV2VzV0MrZ0lSTVNSSGtMSG9xQ2VwV2VEaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYnVGNm0ya1dlZmVtcVFTaEI3Ti9xVGhRMTVIajJiK2ljWENJTmMxaFYwSGtxZW53T0RUY1dZMVM5bG5SSkxFZWJPL3ZOZmF0azNxam0vaHV6V1VGQVE9PSIsImRldmljZVNpZ25hdHVyZSI6Im9TNzlnS1FRUkx2ZnVQb1JNTWdrOTRWY3RBakVRNk5WMmpJeldOOEdPRXVhZnVLbTdqaEtCRFFFU0RPNVFZeG1NdTYzRG5rbFF6WUpuUEdZL2c4TWpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzgxMzMwNzQ1OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmVITUlsTHZoby9zVjlJcnJtMW5yRmd2b0NFVEVrUjVDeDZLZ25xVm5nNSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzIwMzQ0MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLejIifQ==";
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
