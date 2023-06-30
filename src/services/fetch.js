import {handleFetch} from "./handleFetch";

export const fetch = {
    'autorization': (values) => handleFetch.login(values),
    'registration': (values) => handleFetch.registration(values),
    'getUser': () => handleFetch.getUser(),
    'getUsers': () => handleFetch.getUsers(),
}