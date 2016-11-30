var date = new Date();
global.Write = function(text) {
    return " [" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] ==> " + text;
}