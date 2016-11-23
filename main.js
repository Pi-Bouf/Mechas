require('colors');
require('./utils');
global.http = require('https');
global.fs = require('fs');

/* ######################################################### */
// Définition des variables
var port = 357;

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

/* ######################################################### */
// Démarrage du server
console.log("");
console.log(Write("Starting server on port: " + port + "...").green);
global.io = require('socket.io')(port);
require('./classUser');
console.log(Write("Starting started on port: " + port + " !").green);
console.log(Write("Connexion to MySQL@localhost...").green);
var mysql = require('mysql2');
global.connection = mysql.createConnection({host:'localhost', user: 'root', password: '111', database: 'mechas'});
console.log(Write("Connected to MySQL !").green);