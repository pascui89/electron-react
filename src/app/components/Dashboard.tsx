import * as React from "react";
import { Button, Input, Jumbotron } from 'reactstrap';

interface IDashboardProps {
  message: string;
  connection: any;
  inputValue: string;
  feaching: boolean;
  changeInputValue: (e: React.FormEvent<HTMLInputElement>) => void;
  keyPressed: (event: any, connection: any) => void;
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
            <div className="row">
              <div className="col-8 mr-auto">
                <Input className="w-100"
                      value={this.props.inputValue} 
                      onChange={event => this.props.changeInputValue(event)}
                      onKeyDown={event => this.props.keyPressed(event, this.props.connection)} 
                      placeholder="Enter a name...">        
                </Input>
               </div> 
              <p className="lead col-4">
                <Button color="primary" 
                        onClick={() => this.props.sendMessage(this.props.inputValue, this.props.connection)}>
                    Send
                </Button>
              </p>
            </div>
          </Jumbotron>
        </div>
      </>;
  }

}
