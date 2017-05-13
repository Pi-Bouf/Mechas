global.clientList = Array();
class DBManager {
    constructor() {
        // Ici tu ne peux pas récupérer la liste des utilisateurs car bientôt
        // tu vas devoir écrire une fonction pour checker sans cesse s'il y en a de nouveaux
        this.userList();
    }

    userList() {
        new Promise((resolve, reject) => {
            connection.query('SELECT id, name FROM users', (error, results, fields) => {
                if (error) {
                    reject();
                    throw error;
                }
                console.log(colors.blue("User to sync: " + results.length));
                resolve(results);
            });
        }).then((results) => {
            this.makeClient(results);
        });
    }

    makeClient(results) {
        results.forEach((element) => {
            clientList.push(new Client(element));
        });
    }
}

module.exports = DBManager;