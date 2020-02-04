import { EAlertType } from "../components/Alert";

export interface IDashboardProps {
  connection: any;
  message: string;
  inputValue: string;
  feaching: boolean;
  error: {
    messageError: string,
    type: EAlertType,
    showMessage: boolean
  }
}

const initialState: IDashboardProps = {
    connection: null,
    inputValue: "",
    message: "",
    feaching: false,
    error: {
      messageError: "",
      type: null,
      showMessage: null
    }
};

export default initialState;