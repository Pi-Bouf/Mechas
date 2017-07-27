var https = require('https');

class Client {
    constructor(data) {
        // Get data from data (?? :D)
        this.name = data.name;
        this.id = data.id;
        this.videoList = Array();
        this.videoToDownloadList = Array();
        this.interval = 60000;
        // PROD - this.interval = Math.floor((Math.random() * 3) + 1) * 60000;
        // Little log !
        console.log(colors.green("New client " + data.name + " [" + this.interval / 60000 + "m]"));
        setInterval(() => {
            this.getPlaylistList();
            console.log(colors.cyan("Syncing user " + data.name));
        }, this.interval);
    }

    getPlaylistList() {
        // Get the list of YouTube's playlist
        new Promise((resolve, reject) => {
            connection.query('SELECT playlist_id, name FROM users_playlists INNER JOIN users on id = user_id WHERE user_id = ' + this.id, (error, results, fields) => {
                if (error) {
                    reject();
                    throw error;
                }
                resolve(results);
            });
        }).then((results) => {
            results.forEach((element) => {
                console.log(colors.green("PlaylistID: " + element.playlist_id + " [" + this.name + "]"));
                this.getPlaylistItems(element.playlist_id);
            });
        });
    }

    getPlaylistItems(playlist_id) {
        https.get('https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=' + playlist_id + '&maxResults=50&key=' + config.youtube.apiKey, (res) => {
            let body = "";
            res.on('data', (data) => {
                body += data;
            });
            res.on('end', () => {

                let ignore = 0,
                    added = 0;

                body = JSON.parse(body);
                body.items.forEach((element) => {
                    if (this.videoList.indexOf(element.contentDetails.videoId) == -1) {
                        this.videoList.push(element.contentDetails.videoId);
                        this.videoToDownloadList.push(element.contentDetails.videoId);
                        added++;
                    } else {
                        ignore++;
                    }
                });
                console.log(colors.yellow("Added: " + added + " - Ignored: " + ignore + " [" + this.name + "]"))
            });
        });
    }
}

module.exports = Client;