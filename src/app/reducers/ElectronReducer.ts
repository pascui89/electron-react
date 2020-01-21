import { ConnectionBuilder } from "electron-cgi";
import { EReduxActionTypes } from "../actions/ElectronAction";

export interface IReduxBaseAction {
    type: EReduxActionTypes;
    payload: any
}

export default function electronReducer(state: any, action: IReduxBaseAction) {
    try {
        switch (action.type) {
        case EReduxActionTypes.SETUP_CONNECTION:
            return { 
                ...state, 
                connection: new ConnectionBuilder().connectTo('dotnet', 'run', '--project', 'ElectronCgiDotNetConsole').build()
            };
        case EReduxActionTypes.SEND_MESSAGE:
            let resp: string = "";
            state.connection.send("greeting", action.payload.message, (response: any) => {
                resp = response;
                console.log(`Response handler: ${resp}`);
                return { 
                    ...state,
                    message: resp 
                };
            });
        default:
            return state;
        }
    } catch (e) {
        console.error(e);
        return state;
    }
  }