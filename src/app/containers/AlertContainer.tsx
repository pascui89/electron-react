import { connect } from 'react-redux';
import { AlertComponent } from '../components/Alert';
import { setToggleTimeout } from '../actions/ElectronAction';

const mapStateToProps = (state: any) => {
    // ... computed data from state and optionally ownProps
    return {
        messageError: state.error.messageError,
        type: state.error.type,
        showMessage: state.error.showMessage
    }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setToggleTimeout: () => dispatch(setToggleTimeout())
  }
}

// and that function returns the connected, wrapper component:
export default connect(mapStateToProps, mapDispatchToProps)(AlertComponent);