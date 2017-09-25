var https = require('https');

class User {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.playlistArray = new Array;
        this.musicArray = new Array;
        this.isDownloading = false;

        this.interval = 20000;
        // PROD - this.interval = Math.floor((Math.random() * 3) + 1) * 60000;
        console.log(colors.green("New user " + data.name + " [" + this.interval / 60000 + "m]"));

        this.getPlaylist();

        setInterval(() => {
            this.checkPlaylistData();
        }, this.interval);
    }

    getPlaylist() {
        connection.query('SELECT playlist_id FROM users_playlists WHERE user_id = ' + this.id, (error, results, fields) => {
            if (error) {
                console.log(colors.red("[checkPlaylist] Can't get playlist for user " + this.name));
                throw error;
            }
            if (results.length > 0) {
                results.forEach((element) => {
                    if (this.playlistArray.indexOf(element.playlist_id) == -1) {
                        this.playlistArray.push(element.playlist_id);
                    }
                    console.log(colors.cyan("Playlist to sync for the user " + this.name + ": " + this.playlistArray.length));
                });
            } else {
                console.log(colors.yellow("User " + this.name + " has no playlist !"))
            }
        });
    }

    checkPlaylistData() {
        console.log(colors.magenta("Checking data for " + this.name));
        this.playlistArray.forEach((playlist_id) => {
            HttpPooling.get('https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=' + playlist_id + '&maxResults=50&key=' + config.youtube.apiKey, (response) => {
                response.data.items.forEach((element) => {
                    if (!MusicArray.has(element.contentDetails.videoId)) {
                        MusicArray.set(element.contentDetails.videoId, new Music(element.contentDetails.videoId, this))
                    }
                    if (this.musicArray.indexOf(element.contentDetails.videoId) == -1) {
                        this.musicArray.push(element.contentDetails.videoId);
                        MusicArray.get(element.contentDetails.videoId).addUser(this);
                    }
                });
                this.downloadingMusics();
            });
        });
    }

    addPlaylist(playlist_id) {
        connection.query('SELECT user_id, playlist_id FROM users_playlists WHERE user_id = ' + this.id + ' AND playlist_id = "' + playlist_id + '"', (error, results, fields) => {
            if (error) {
                console.log(colors.red("[addPlaylist] Can't add playlist for user " + this.name));
                throw error;
            }
            if (results.length == 0) {
                connection.query('INSERT INTO users_playlists VALUES(' + this.id + ', "' + playlist_id + '")', (error, results, fields) => {
                    console.log(colors.green("User " + this.name + " have a new playlist !"));
                });
            } else {
                console.log(colors.yellow("User " + this.name + " has already playlist " + playlist_id + " !"))
            }
        });
    }

    downloadingMusics() {
        if (!this.isDownloading) {
            this.isDownloading = true;
            for(var i = 0; i < this.musicArray.length; i++) {
                let tmpMusic = MusicArray.get(this.musicArray[i]);
                if(tmpMusic.getReadyToDownload()) {
                    tmpMusic.download(() => {
                        this.isDownloading = false;
                        this.downloadingMusics();
                    });
                    return true;
                }
            }

            this.isDownloading = false;
        }
    }
}

module.exports = User;