import user from "../store/user";

export const items = [
    {
        label: 'Пользователи',
        key: 'home',
        navigate: '/home'
    },
    {
        label: 'Какой то список',
        key: 'list',
        navigate: '/list'
    },
    {
        label: 'Выйти',
        key: 'logout',
        onClick: () => user.logOut()
    }];