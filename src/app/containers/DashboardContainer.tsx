import { connect } from 'react-redux';
import { sendMessage, setupConnectionToRestartOnConnectionLost } from '../actions/ElectronAction';
import { Dashboard } from '../components/Dashboard';

const mapStateToProps = (state: any) => {
    // ... computed data from state and optionally ownProps
    return {
      message: state.message,
      connection: state.connection
    }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    sendMessage: (message: string, connection: any) => dispatch(sendMessage(message, connection)),
    setupConnectionToRestartOnConnectionLost: () => dispatch(setupConnectionToRestartOnConnectionLost())
  }
}

// and that function returns the connected, wrapper component:
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);