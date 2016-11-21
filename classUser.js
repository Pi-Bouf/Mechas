// event de connection
io.on('connection', function (socket) {

    console.log(Write("Connexion from " + socket.handshake.address).yellow);
    var name = "";
    var playlistID = "";
    var ID = "";
    var videoList = new Array();


    socket.on('User', function (data) {
        name = data;

        connection.query('SELECT * FROM users WHERE username = "' + name + '"', function (err, results, fields) {
            if (results == "") {
                console.log("Unknown user...");
            } else {
                ID = results[0].ID;
                playlistID = results[0].playlistID;
            }
        });
    });

    socket.on('Sync', function (data) {
        if (ID == "") {
            console.log("Can't sync for unknown user '" + name + "'");
        } else {
            if (data == "request") {
                console.log(Write("Request for " + name + "...").cyan);
                Sync();
            } else if (data == "pull") {
                console.log(Write("Pull for " + name + "...").cyan);
                Pull();
            }
        }
    });

    function Sync() {
        http.get("https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&key=AIzaSyB-760geQwVXKSwpMocMCmAAvUzYtQ0guQ&maxResults=50&playlistId=" + playlistID, function (e) {
            var bodyData = "";

            e.on('data', function (data) {
                bodyData += data;
            });

            e.on('end', function () {
                var data = JSON.parse(bodyData);
                var totalResults = data.pageInfo.totalResults;
                for (var i = 0; i < totalResults; i++) {
                    if (videoList.indexOf(data.items[i].contentDetails.videoId) == -1) {
                        videoList.push(data.items[i].contentDetails.videoId);
                    }
                }
                console.log(Write("Request ended for " + name + " !").cyan);
            });
        });
    }

    function Pull() {
        var videoListLength = videoList.length;
        for (var i = 0; i < videoListLength; i++) {
            AddInDB(i);
        }
    }

    function AddInDB(ID) {
        connection.query('SELECT videoID FROM videos WHERE videoID = "' + videoList[ID] + '"', function (err, results) {
            if (results.length == 0) {
                connection.query('INSERT INTO videos(videoID, downloaded) VALUES("' + videoList[ID] + '", 0)');
            }
        });
        if(ID == videoList.length - 1)
        {
            console.log(Write("Pull ended for " + name + " !").cyan);
        }
    }
});