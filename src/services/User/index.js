export class UserServices {
    constructor() {
    }
    login (values) {
        return fetch(`http://localhost:5000/auth/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify(values),
        })
    }

    registration (values) {
        return fetch(`http://localhost:5000/auth/registration`, {
            method: "POST",
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify(values),
        })
    }

    getUser () {
        return fetch(`http://localhost:5000/auth/user`, {
            method: "GET",
            headers: {"Content-Type": "application/json; charset=utf-8", "Authorization": `Bearer ${localStorage.getItem('token')}`},
        })
    }

    getUsers () {
        return fetch(`http://localhost:5000/auth/users`, {
            method: "GET",
            headers: {"Content-Type": "application/json; charset=utf-8", "Authorization": `Bearer ${localStorage.getItem('token')}`},
        })
    }
}

export const userServices = new UserServices();