import { notification } from 'antd';

export class OpenNotification {
    success(message, description) {
        notification.success({
            message: message,
            description:
            description,
        })
    }

    error(message, description) {
        notification.error({
            message: message,
            description:
            description,
        })
    }
};

export const openNotification = new OpenNotification();