import { notification } from 'antd';

export const notificationSuccess = (messsage, description) => {
    return notification.success({
        message: messsage,
        description: description
    });
}
export const notificationError = (messsage, description) => {
    return notification.error({
        message: messsage,
        description: description
    });
}
export const notificationInfo = (messsage, description) => {
    return notification.info({
        message: messsage,
        description: description
    });
}
export const notificationWarning = (messsage, description) => {
    return notification.warning({
        message: messsage,
        description: description
    });
}
