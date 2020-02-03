export enum EReduxActionTypes {
    SETUP_CONNECTION = 'SETUP_CONNECTION',
    SEND_MESSAGE = 'SEND_MESSAGE'
}

export const setupConnectionToRestartOnConnectionLost = () => {
    return {
        type: EReduxActionTypes.SETUP_CONNECTION
    }
};

export const sendMessage = (message: string, connection: any) => {
    return function (dispatch: any) {
        connection.send("greeting", message, (response: any) => {
            dispatch({
                type: EReduxActionTypes.SEND_MESSAGE,
                payload: {
                    message: response
                }
            });
        });
    }
};