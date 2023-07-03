import {handleFetch} from "./handleFetch";

export const fetch = {
    'autorization': (values) => handleFetch.login(values),
    'registration': (values) => handleFetch.registration(values),
    'getUser': () => handleFetch.getUser(),
    'getUsers': () => handleFetch.getUsers(),
    'deleteUser': (username) => handleFetch.deleteUser(username),
    'getList': () => handleFetch.getList(),
    'addToList': (values) => handleFetch.addToList(values),
    'deleteToList': (id) => handleFetch.deleteToList(id),

}