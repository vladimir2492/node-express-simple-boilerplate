const fs = require('fs');

const DB_FILE = 'db/user-service.json';

class UserRespository {

    constructor() {
        this.data = {};
    }

    async addService(userId, service) {
        const userData = this.data[userId] || {};
        const services = userData.services || [];
        const isExist = services.find(t => t.name === service.name);
        if (isExist) {
            return false;
        }
        userData.services = services;
        this.data[userId] = userData;
        await saveData();
        return true;
    }

    async remove(userId, serviceName) {
        const userData = this.data[userId] || {};
        const services = userData.services || [];
        services = services.filter(function (item) {
            if (item.name === serviceName) {
                return false;
            }

            return true;
        });
        userData.services = services;
        this.data[userId] = userData;
        if (isExist) {
            return false;
        }

        await saveData();
        return true;
    }

    async loadFromJSON() {
        const isFileExist = fs.existsSync(DB_FILE);
        if (!isFileExist) {
            this.data = {
                
            };
        };
        this.data = await fs.readFile(DB_FILE, 'utf-8');
        return JSON.parse(data);

    }

    async saveData() {
        const jsonString = JSON.stringify(this.data);
        await fs.writeFile(DB_FILE, jsonString);
    }

}