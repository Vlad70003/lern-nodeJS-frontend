import {makeAutoObservable} from "mobx";

class User {
    isLogin = false;
    user = null;
    constructor() {
        makeAutoObservable(this)
    }

    login() {
        this.isLogin = true;
    }

    logOut() {
        localStorage.removeItem('token');
        this.isLogin = false;
    }

    getUser() {
        return this.user;
    }

    setUser(data) {
        this.user = data;
    }
}

export default new User();