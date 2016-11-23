var youtubeApiPlaylistItem = "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&key=AIzaSyB-760geQwVXKSwpMocMCmAAvUzYtQ0guQ&maxResults=50&playlistId=";
var helloACMAPI = "https://helloacm.com/api/video/?cached&video=https://www.youtube.com/watch?v=";

// event de connection
io.on('connection', function (socket) {

    console.log(Write("Connexion from " + socket.handshake.address).yellow);
    var name = "";
    var playlistID = "";
    var ID = "";
    var videoList = new Array();


    socket.on('@CO', function (data) {
        name = data;

        connection.query('SELECT * FROM users WHERE username = "' + name + '"', function (err, results, fields) {
            if (results == "") {
                console.log("Unknown user...");
                socket.emit("@CO", "NO");
            } else {
                ID = results[0].ID;
                playlistID = results[0].playlistID;
                socket.emit("@CO", "OK");
            }
        });
    });

    socket.on('@SY', function (data) {
        if (ID == "") {
            console.log("Can't sync for unknown user '" + name + "'");
        } else {
            if (data == "request") {
                console.log(Write("Request for " + name + "...").cyan);
                Sync(playlistID, this);
            } else if (data == "pull") {
                console.log(Write("Pull for " + name + "...").cyan);
                RequestChecker();
            }
        }
    });

    socket.on("@DL", function (data) {
        if (data == "request") {
            RequestDownloader();
        }
    });

    function Sync() {
        http.get(youtubeApiPlaylistItem + playlistID, function (e) {
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
                console.log(Write("Request for " + name + " OK").green);
                socket.emit("@SY", "OK-R");
            });
        });
    }

    function RequestChecker() {
        for (var i = 0; i < videoList.length; i++) {
            Check(videoList[i]);
        }
    }

    function Check(videoID) {
        connection.query('SELECT videoID FROM videos WHERE videoID = "' + videoID + '"', function (serr, result) {
            if (result.length == 0) {
                connection.query('INSERT INTO videos VALUES("' + videoID + '", "", 0)');
            }
        });

        connection.query('SELECT ID FROM users_videos WHERE ID = "' + ID + '" AND videoID = "' + videoID + '"', function (err, result) {
            if (result.length == 0) {
                connection.query('INSERT INTO users_videos VALUES("' + ID + '", "' + videoID + '")');
            }
        });
        if (videoID == videoList[videoList.length - 1]) {
            console.log(Write("Pull for " + name + " OK").green);
            videoList = [];
            socket.emit("@SY", "OK-P");
        }
    }

    function RequestDownloader() {
        connection.query('SELECT videos.videoID FROM users_videos NATURAL JOIN videos WHERE ID = "' + ID + '" AND downloaded= 0', function(err, results) {
            for(var i = 0; i < results.length; i++)
            {
                Download(results[i].videoID);
            }
        });
    }

    function Download(videoID) {
        http.get(helloACMAPI + videoID, function (e) {
            var body = '';

            e.on('data', function (data) {
                body += data;
            });

            e.on('end', function () {
                body = JSON.parse(body);
                console.log(Write("Download video ID: " + videoID).white);
                DownloadFromURL(body.url, videoID + ".mp4");
            });
        });
    }

    function DownloadFromURL(url, name) {
        http.get(url, function (e) {
            if (e.statusCode == "302" || e.statusCode == "301") {
                DownloadFromURL(e.headers.location, name);
            } else if(e.statusCode == "403") {
                console.log(Write("Video " + name + " can't be downloaded... Blocked maybe !").red);
            } else {
                console.log(e.headers['content-length']);
                var file = fs.createWriteStream("Musics/" + name);
                e.on('data', function (data) {
                    file.write(data);
                });

                e.on('end', function () {
                    file.end();
                    console.log(Write("Video " + name + "has been downloaded"));
                });
            }
        });
    }
});