import user from "../store/user";

export const items = [
    {
        label: 'Выйти',
        key: 'logout',
        onClick: () => user.logOut()
    }];