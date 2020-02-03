export interface IDashboardProps {
  message: string;
  connection: any
}

const initialState: IDashboardProps = {
    connection: null,
    message: ""
};

export default initialState;