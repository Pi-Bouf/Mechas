// Loading utils
global.config = require('../config/config.json');
global.colors = require('colors');
var mysql = require('mysql');
var WebServer = require('./lib/WebServer');
global.UserLoader = require('./lib/UserLoader');
global.HttpPooling = new (require('./lib/HttpPooling'));

// Loading models
global.User = require('./model/User');
global.Music = require('./model/Music');
global.MusicArray = new Array;


/* ######################################################### */
// Présentation
console.log("");
console.log("  88b           d88                          88".cyan);
console.log("  888b         d888                          88".cyan);
console.log("  88`8b       d8'88                          88".cyan);
console.log("  88 `8b     d8' 88   ,adPPYba,   ,adPPYba,  88,dPPYba,   ,adPPYYba,  ,adPPYba,".cyan);
console.log("  88  `8b   d8'  88  a8P_____88  a8\"     \"\"  88P'    \"8a  \"\"     `Y8  I8[    \"\"".cyan);
console.log("  88   `8b d8'   88  8PP\"\"\"\"\"\"\"  8b          88       88  ,adPPPPP88   `\"Y8ba,".cyan);
console.log("  88    `888'    88  \"8b,   ,aa  \"8a,   ,aa  88       88  88,    ,88  aa    ]8I".cyan);
console.log("  88     `8'     88   `\"Ybbd8\"'   `\"Ybbd8\"'  88       88  `\"8bbdP\"Y8  `\"YbbdP\"'".cyan);
console.log("");

Array.prototype.remove = function(data) {
    let i = this.indexOf(data);
    if (i != -1) {
        this.splice(i, 1);
    }
}

// Connection to MySQL
global.connection = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.pass,
    database: config.mysql.data
});
console.log("Connected to MySQL !");

// Start WebServer
new WebServer(config.web.port);
console.log("");
// Start DBManager
new UserLoader();