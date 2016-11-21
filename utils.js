var date = new Date();
global.Write = function (text) {
    return " [" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] ==> " + text;
}

global.Download = function (id) {
    var url = 'https://helloacm.com/api/video/?cached&video=https://www.youtube.com/watch?v=' + id;

    http.get(url, function (e) {

        var bodyData = "";

        e.on('data', function (data) {
            bodyData += data;
        });

        e.on('end', function () {
            var data = JSON.parse(bodyData);
            console.log("Request for " + id + " OK !");
        });

    });
}