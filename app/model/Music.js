const https = require('https');

class Music {
    constructor(videoID) {
        this.videoID = videoID;
        this.state = null;
        this.title = null;
        this.title_tag = null;
        this.author_tag = null;
        this.album_tag = null;
        this.year_tag = null;
        this.style_tag = null;
        this.downloaded = null;

        // Check in BDD if video exist
        new Promise((resolve, reject) => {
            connection.query('SELECT *FROM videos WHERE video_id = "' + this.videoID + '"', (error, results, fields) => {
                if (error) {
                    reject("Error DB !");
                    throw error;
                }
                resolve(results);
            });
        }).then((data) => {
            // If there are a video, set data
            if (data.length == 1) {
                for (var key in data[0]) {
                    this[key] = data[0][key];
                }
                this.state = "_stored";
            } else {
                // Check via the Youtube API
                new Promise((resolve, reject) => {
                    HttpPooling.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoID + "&key=" + config.youtube.apiKey, (response) => {
                        resolve(response.data.items[0].snippet.title);
                    });
                }).then((data_http) => {
                    console.log(data_http);
                    this.state = "_new";
                }).catch((error_http) => {
                    console.log(colors.red("Can't get video data (" + videoID + "). Error: " + error_http));
                    this.state = "_error";
                });

            }
        }).catch((error) => {
            console.log(error);
        });
    }

    addUser(user) {
        connection.query('SELECT * FROM users_videos WHERE video_id = "' + this.videoID + '" AND user_id = "' + user.id + '"', (error, results, fields) => {
            if (error) {
                console.log(colors.red("[addUser] Can't check if user " + user.name + " have the video " + this.videoID));
                throw error;
            }
            if(results.length == 0) {
                connection.query('INSERT INTO users_videos VALUES(' + user.id + ', "' + this.videoID + '")', (error, results, fields) => {
                    if (error) {
                        console.log(colors.red("[addUser] Can't add video " + this.videoID + " to user " + user.name));
                        throw error;
                    }
                });
            }
        });
    }

    downloadVideo() {

    }

    extract() {

    }

    save() {
        
    }
}

module.exports = Music;