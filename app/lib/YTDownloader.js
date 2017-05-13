var https = require('https');
var fs = require('fs');

class YTDownloader {
    constructor() {
        this.videoToDownloadList = Array();
        this.videoDownloaded = Array();
        this.downloadingIsOn = false;
        this.downloadQueue = 0;

        setInterval(() => {
            this.getAllMusicFromClient();
        }, 20000);
    }


    getAllMusicFromClient() {
        clientList.forEach((client) => {
            client.videoToDownloadList.forEach((element) => {
                if (this.videoToDownloadList.indexOf(element) == -1 && this.videoDownloaded.indexOf(element) == -1) {
                    this.videoToDownloadList.push(element);
                }
            });
        });
        if (this.videoToDownloadList.length != 0) {
            console.log(colors.magenta(this.videoToDownloadList.length + " musics to download !"));
            if (!this.downloadingIsOn) {
                this.startDownloadProcess();
            }
        } else {
            console.log(colors.red("Nothing to download..."));
        }
    }

    startDownloadProcess() {
        this.downloadingIsOn = true;
        let intervalForDownload = setInterval(() => {

            if (this.videoToDownloadList.length == 0) {
                clearInterval(intervalForDownload);
                this.downloadingIsOn = false;
            } else {
                if (this.downloadQueue < 5) {
                    this.checkVideoData(this.videoToDownloadList[0]);
                }
            }
        }, 10000);
    }

    checkVideoData(videoID) {
        this.setVideoDownloadedState(videoID);
        this.downloadQueue++;
        console.log(colors.yellow("Starting downloading: " + videoID));

        connection.query('SELECT downloaded FROM videos WHERE videoID = "' + videoID + '"', (error, results, fields) => {
            if (error) {
                throw error;
            }
            if (results.length == 0 || results[0].downloaded == 0) {
                new Promise((resolve, reject) => {
                    https.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoID + "&key=" + config.youtube.apiKey, (res) => {
                        let videoDataSnippet = "";
                        res.on("data", (data) => {
                            videoDataSnippet += data;
                        });
                        res.on("end", () => {
                            videoDataSnippet = JSON.parse(videoDataSnippet);
                            resolve(videoDataSnippet.items[0].snippet.title)
                        });
                    });
                }).then((name) => {
                    https.get("https://helloacm.com/api/video/?cached&video=https://www.youtube.com/watch?v=" + videoID, (res) => {
                        let videoDataUrl = "";
                        res.on("data", (data) => {
                            videoDataUrl += data;
                        });
                        res.on("end", () => {
                            videoDataUrl = JSON.parse(videoDataUrl);
                            this.downloadVideo(videoDataUrl.url, name, videoID);
                        });
                    });
                });
            }
        });
    }

    setVideoDownloadedState(videoID) {
        this.videoDownloaded.push(videoID);
        this.videoToDownloadList.remove(videoID);
    }

    downloadVideo(url, name, videoID) {
        https.get(url, (res) => {
            if (res.statusCode == 302 || res.statusCode == 303) {
                this.downloadVideo(res.headers.location, name, videoID);
            } else if (res.statusCode == 403) {
                console.log(colors.red("Can't down video: " + videoID));
                this.downloadQueue--;
            } else {
                let file = fs.createWriteStream("./data/Videos/" + videoID + ".mp4");
                res.on("data", (data) => {
                    file.write(data);
                });
                res.on("end", () => {
                    file.end();
                    console.log(colors.yellow("Video downloaded: " + videoID));
                    this.downloadQueue--;

                    connection.query('SELECT downloaded FROM videos WHERE videoID = "' + videoID + '"', (error, results, fields) => {
                        if (error) {
                            throw error;
                        }
                        if (results.length == 0) {
                            connection.query('INSERT INTO videos(videoID, title, downloaded) VALUES("' + videoID + '", "' + name + '", 1)', (error, results, fields) => {
                                if (error) {
                                    throw error;
                                }
                            });
                        } else if (results[0].downloaded == 0) {
                            connection.query('UPDATE videos SET downloaded = 1 WHERE videoID = "' + videoID + '"', (error, results, fields) => {
                                if (error) {
                                    throw error;
                                }
                            });
                        }
                    });
                });
            }
        });
    }

}

module.exports = YTDownloader;