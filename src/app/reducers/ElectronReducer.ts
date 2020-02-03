import { ConnectionBuilder } from "electron-cgi";
import { EReduxActionTypes } from "../actions/ElectronAction";

export interface IReduxBaseAction {
    type: EReduxActionTypes;
    payload: any
}

const electronReducer = (state: any, action: IReduxBaseAction) => {
    try {
        switch (action.type) {
        case EReduxActionTypes.SETUP_CONNECTION:
            return { 
                ...state, 
                connection: new ConnectionBuilder().connectTo('dotnet', 'run', '--project', 'ElectronCgiDotNetConsole').build()
            };
        case EReduxActionTypes.CHANGE_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.payload
            }
        case EReduxActionTypes.SEND_MESSAGE:
            return { 
                ...state,
                message: action.payload
            };
        default:
            return state;
        }
    } catch (e) {
        console.error(e);
        return state;
    }
  }

  export default electronReducer;