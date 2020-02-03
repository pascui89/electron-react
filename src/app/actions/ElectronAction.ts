import { HtmlHTMLAttributes } from "react";

export enum EReduxActionTypes {
    SETUP_CONNECTION = 'SETUP_CONNECTION',
    SEND_MESSAGE = 'SEND_MESSAGE',
    CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
}

export const setupConnectionToRestartOnConnectionLost = () => {
    return {
        type: EReduxActionTypes.SETUP_CONNECTION
    }
};

export const changeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    return {
        type: EReduxActionTypes.CHANGE_INPUT_VALUE,
        payload: e.currentTarget.value
    }
}

export const keyPressed = (event: React.KeyboardEvent<HTMLInputElement>, connection: any) => {
    if (event.key === "Enter") {
      return function (dispatch: any) {
        dispatch(sendMessage(event.currentTarget.value, connection))
      }
    }
  }

export const sendMessage = (message: string, connection: any) => {
    return function (dispatch: any) {
        connection.send("greeting", message, (response: any) => {
            dispatch({
                type: EReduxActionTypes.SEND_MESSAGE,
                payload: response
            });
        });
    }
};