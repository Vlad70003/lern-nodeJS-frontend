import {makeAutoObservable} from "mobx";

class Users {

    users = null;
    constructor() {
        makeAutoObservable(this)
    }

    setUsers(data) {
        this.users = data;
    }

    getUsers() {
        return this.users;
    }
}

export default new Users();