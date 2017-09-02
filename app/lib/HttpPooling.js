var https = require('https');

class HttpPooling {
    constructor() {
        this.queue = Array();
        this.isWorking = false;
    }

    get(url, callback) {
        let tmpObj = new Object;
        tmpObj.url = url;
        tmpObj.callback = callback;
        tmpObj.data = null;
        
        this.queue.push(tmpObj);

        if(!this.isWorking) {
            this.executeQueue();
        }
    }

    executeQueue() {
        if(this.queue.length != 0) {
            this.isWorking = true;
            let tmpObj = this.queue[0];
            https.get(tmpObj.url, (res) => {
                let bodyData = "";
                res.on('data', (chunk) => {
                    bodyData += chunk;
                });

                res.on('end', () => {
                    let tmpResponse = new Object;
                    tmpResponse.url = tmpObj.url;
                    tmpResponse.data = JSON.parse(bodyData);
                    tmpObj.callback(tmpResponse);

                    this.queue.remove(tmpObj);
                    this.executeQueue();
                });
            }).on('error', (e) => {
                console.log(colors.red("Error ! " + e));

                this.queue.remove(tmpObj);
                this.executeQueue();
            });
        } else {
            this.isWorking = false;
        }
    }
}

module.exports = HttpPooling;