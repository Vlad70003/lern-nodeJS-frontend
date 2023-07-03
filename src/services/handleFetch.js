import {userServices} from "./User";
import user from "../store/user";
import users from "../store/users";
import list from "../store/list";
import {openNotification} from "../utils/notification";
import {descServices} from "./Desc";

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

    getList() {
        descServices.getList().then(response => {
            return [response.json(), response.status]
        }).then(([data, status]) => {
            if (status !== 200) {
                data.then(data => openNotification.error(data.message))
            } else {
                data.then(data => {
                    list.setList(data);
                })
            }
        }).catch(e => console.log(e));
    }

    addToList(values) {
        descServices.addToList(values).then(response => {
            return [response.json(), response.status]
        }).then(([data, status]) => {
            if (status !== 200) {
                data.then(data => openNotification.error(data.message))
            } else {
                data.then(data => {
                    list.setList([...list.data, data]);
                    openNotification.success(JSON.stringify(`Описание ${data?.name}: ${data?.description} успешно добавлены`))
                });

            }
        }).catch(e => console.log(e));
    }

    deleteUser(username) {
        userServices.deleteUser(username).then(response => {
            return [response.json(), response.status]
        }).then(([data, status]) => {
            if (status !== 200) {
                data.then(data => {
                    openNotification.error(data.message)
                })
            } else {
                const data = users.getUsers();
                const newData = data.filter((item) =>
                    item.username !== username
                );
                users.setUsers(newData);
            }
        }).catch(e => console.log(e));
    }

    deleteToList(id) {
        descServices.delete(id).then(response => {
            return [response.json(), response.status]
        }).then(([data, status]) => {
            if (status !== 200) {
                data.then(data => {
                    openNotification.error(data.message)
                })
            } else {
                const data = list.getList();
                const newData = data.filter((item) =>
                    item.id !== id
                );
                list.setList(newData)
            }
        }).catch(e => console.log(e));
    }
}

export const handleFetch = new HandleFetch();