import React, { useContext, useState, useReducer, useEffect } from "react";
import axios from "axios";
import ActionsItemsContext from "./context";
import reducer from "./reducer";
import ActionsList from "./components/ActionsList";
const endPoint = process.env.REACT_APP_API_URL;
const useAPI = endPoint => {
  const [data, setData] = useState([]); //initial state
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get(endPoint);
    // console.log("response", response.data);
    setData(response.data);
  };
  return data; //after assigning to the state
};
export default function App() {
  const initialActions = useContext(ActionsItemsContext); //initial call-> useContext returns values from the context after connected it will return values={state, dispatch}
  const [state, dispatch] = useReducer(reducer, initialActions);
  const saveActions = useAPI(endPoint);
  useEffect(
    () => {
      dispatch({ type: "GET_ACTIONS", payload: saveActions });
    },
    [saveActions]
  );
  return (
    <ActionsItemsContext.Provider value={{ state, dispatch }}>
      <ActionsList />
    </ActionsItemsContext.Provider>
  );
}
