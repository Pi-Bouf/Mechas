class Video {

    constructor(videoID) {
        videoDB.get(videoID).then((doc) => {
            console.log("Rien ne se passe, normal !");
        }).catch((err) => {
            console.log(err);
        });
        console.log("[1]: " + videoID);
    }

}

module.exports = Video;