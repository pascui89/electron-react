import { HtmlHTMLAttributes } from "react";
import { EAlertType } from "../components/Alert";

export enum EReduxActionTypes {
    SETUP_CONNECTION = 'SETUP_CONNECTION',
    SEND_MESSAGE = 'SEND_MESSAGE',
    CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE',
    SHOW__ERROR = 'SHOW_ERROR',
    SET_TOGGLE_ERROR = 'SET_TOGGLE_ERROR'
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
};

export const keyPressed = (event: React.KeyboardEvent<HTMLInputElement>, connection: any) => {
    return function (dispatch: any) {
        if (event.key === "Enter") {
            dispatch(sendMessage(event.currentTarget.value, connection))
        }
        return;
    }
};

export const sendMessage = (inputValue: string, connection: any) => {
    if (!inputValue || inputValue.trim() === '') {
        return function (dispatch: any) {
            dispatch(showAlert('Please, type a name', EAlertType.ERROR));
            dispatch(setToggleTimeout())
        }
    }
    return function (dispatch: any) {
        
        connection.send("greeting", inputValue, (response: any) => {
            dispatch({
                type: EReduxActionTypes.SEND_MESSAGE,
                payload: response
            });
        });
    }
};

export const showAlert = (messageError: string, type: EAlertType) => {
    return {
        type: EReduxActionTypes.SHOW__ERROR,
        payload: {
            messageError: messageError,
            type: type,
            showMessage: true
        }
    }
};

export const setToggleTimeout = () => {
    return function (dispatch: any) {
        setTimeout(() => 
            dispatch({
                type: EReduxActionTypes.SET_TOGGLE_ERROR,
                payload: false
            }), 3000);   
    }
};