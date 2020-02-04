import * as React from 'react';
import { Alert } from 'reactstrap';

export enum EAlertType {
    INFO = "primary",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "danger"
}

interface IComponentProps {
    messageError: string;
    type: EAlertType;
    showMessage: boolean;
    setToggleTimeout: () => void
}

export class AlertComponent extends React.Component<IComponentProps> {

    constructor(props: IComponentProps) {
        super(props);
    }

    public render(): React.ReactNode {
        if (this.props.showMessage == null) {
            return <></>;
        }
        return <Alert color={this.props.type}
                      className={'alert-component' + (this.props.showMessage ? '_show' : '_hidden')} 
                >
                    {this.props.messageError}
                </Alert>;
    }

}