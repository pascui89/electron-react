import * as React from "react";
import { ipcRenderer } from "electron";
import { Button, Jumbotron } from 'reactstrap';
import { ElectronCgiUtil } from "../utils/ElectronCgiUtils";

interface IState {
  message: string;
  name: string;
}

export class Dashboard extends React.Component<{}, IState> {
  public state: IState = {
    message: "",
    name: ""
  };

  public componentDidMount(): void {
    ipcRenderer.on("greeting", this.onMessage);
  }

  public componentWillUnmount(): void {
    ipcRenderer.removeAllListeners("greeting");
  }

  public render(): React.ReactNode {
    return <>
        <div>
          <Jumbotron>
            <h1 className="display-3">Hello, my friend!</h1>
            <p className="lead">This is an application that can make calls by <b>electron-cgi</b> with the backEnd C#</p>
            <p>{this.state.message}</p>
          </Jumbotron>
        </div>
      </>;
  }

  private changeName() {
    let electronCgi = new ElectronCgiUtil();
  }

  private onMessage = (event: any, message: string) => {
    this.setState({ message: message });
  };
}
