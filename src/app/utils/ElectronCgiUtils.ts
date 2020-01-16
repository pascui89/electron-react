import { ConnectionBuilder } from "electron-cgi";

export class ElectronCgiUtil {
    private _connection: any = null;

    public setupConnectionToRestartOnConnectionLost = () => {
        this._connection = new ConnectionBuilder().connectTo('dotnet', 'run', '--project', 'ElectronCgiDotNetConsole').build();
        this._connection.onDisconnect = () => {
          console.error('Connection lost, restarting...');
          this.setupConnectionToRestartOnConnectionLost();
        };
      }
      
    public sendMessage = (webContents: Electron.WebContents, message: string = "Everyone from C#") => {
        this._connection.send("greeting", message, (response: any) => {
          console.log(`Response handler: ${response}`);
          webContents.send("greeting", response);
        });
    }
}