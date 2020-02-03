export interface IDashboardProps {
  message: string;
  inputValue: string;
  connection: any;
}

const initialState: IDashboardProps = {
    connection: null,
    inputValue: "",
    message: ""
};

export default initialState;