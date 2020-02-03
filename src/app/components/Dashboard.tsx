import * as React from "react";
import { Button, Jumbotron } from 'reactstrap';

interface IDashboardProps {
  message: string;
  connection: any;
  sendMessage: (message: string, connection: any) => void;
  setupConnectionToRestartOnConnectionLost: () => void;
}

export class Dashboard extends React.Component<IDashboardProps> {
  
  constructor(props: IDashboardProps) {
    super(props);
  }

  public componentDidMount(): void {
    this.props.setupConnectionToRestartOnConnectionLost();
  }

  public render(): React.ReactNode {
    return <>
        <div>
          <Jumbotron>
            <h1 className="display-3">Hello, my friend!</h1>
            <p className="lead">This is an application that can make calls by <b>electron-cgi</b> with the backEnd C#</p>
            <p>{this.props.message}</p>
            <p className="lead">
              <Button color="primary" onClick={() => this.props.sendMessage("Carapapa", this.props.connection)}>Send Message</Button>
            </p>
          </Jumbotron>
        </div>
      </>;
  }
}
