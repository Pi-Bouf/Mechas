global.userList = Array();

class UserLoader {
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
            this.makeUser(results);
        });
    }

    makeUser(results) {
        results.forEach((element) => {
            userList.push(new User(element));
        });
    }
}

module.exports = UserLoader;