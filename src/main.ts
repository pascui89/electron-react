import { app, BrowserWindow } from "electron";
import { ElectronCgiUtil } from "./app/utils/ElectronCgiUtils";

let window: BrowserWindow | null;

const createWindow = () => {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')

  // Open the DevTools.
  win.webContents.once('dom-ready', () => {
    let electronCgi = new ElectronCgiUtil();
    electronCgi.setupConnectionToRestartOnConnectionLost();
    electronCgi.sendMessage(win.webContents);
  })

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (window === null) {
    createWindow();
  }
});