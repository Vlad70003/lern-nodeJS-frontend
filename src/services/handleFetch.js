import {userServices} from "./User";
import user from "../store/user";
import users from "../store/users";
import {openNotification} from "../utils/notification";

class HandleFetch {
    login(values) {
        userServices.login(values).then(response => {
                return response.json()
        }).then(data => {
            if (data?.token) {
                localStorage.setItem('token', data.token);
                user.login();
                openNotification.success('Вы вошли!');
            } else {
                throw new Error(data.message)
            }
        }).catch(e => openNotification.error('Ошибка входа', e.message));
    }

    registration(values) {
        userServices.registration(values).then(response => {
            return [response.json(), response.status]
        }).then(([data, status]) => {
            if (status !== 200) {
                data.then(data => openNotification.error(data.message))
            } else {
                data.then(data => openNotification.success(data.message))
            }
        }).catch(e => console.log(e));
    }

    getUser() {
        userServices.getUser().then(response => {
            if (response.ok) {
                return response.json()
            };
        }).then(data => {
            user.setUser(data);
        }).catch(e => console.log(e));;
    }

    getUsers() {
        userServices.getUsers().then(response => {
            if (response.ok) {
                return response.json()
            };
        }).then(data => {
            users.setUsers(data);
        }).catch(e => console.log(e));
    }
}

export const handleFetch = new HandleFetch();