require('colors');
require('./classUser');
require('./utils');

/* ######################################################### */
// Définition des variables
var port = 357;

/* ######################################################### */
// On vide la console
process.stdout.write('\033c');

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
var io = require('socket.io')(port);
console.log(Write("Starting started on port: " + port + " !").green);

// event de connection
io.on('connection', function(socket) {
    var user = new User(socket);
});