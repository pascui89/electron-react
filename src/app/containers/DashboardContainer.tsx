import { connect } from 'react-redux';
import { sendMessage, setupConnectionToRestartOnConnectionLost } from '../actions/ElectronAction';
import { Dashboard } from '../components/Dashboard';

const mapStateToProps = (state: any, ownProps: any) => ({
    // ... computed data from state and optionally ownProps
})

const mapDispatchToProps = {
  sendMessage: (message: string) => sendMessage(message),
  setupConnectionToRestartOnConnectionLost: () => setupConnectionToRestartOnConnectionLost()
}

// and that function returns the connected, wrapper component:
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);