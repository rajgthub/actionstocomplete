import React, { useContext, useState, useReducer, useEffect } from "react";
import axios from "axios";
import ActionsItemsContext from "./context";
import reducer from "./reducer";
import ActionsList from "./components/ActionsList";
const endPoint = "https://actions-api-vxgbeepczf.now.sh/actions";
const useAPI = endPoint => {
  console.log("custome hook function starting");

  const [data, setData] = useState([]); //initial state
  useEffect(() => {
    console.log("custome hook effect is called");

    getData();
    console.log("custome hook effect done fetching: getData!");
  }, []);
  const getData = async () => {
    console.log("custom hook function calling getData: starts");
    const response = await axios.get(endPoint);
    // console.log("response", response.data);
    console.log("getData funciton calling setData to set the state state");
    setData(response.data);
    console.log("after getData  is done changing the state by setData")
  };
  console.log("custome function ending");
  return data; //after assigning to the state
};
export default function App() {
  console.log("app starting");

  const initialActions = useContext(ActionsItemsContext); //initial call-> useContext returns values from the context after connected it will return values={state, dispatch}
  const [state, dispatch] = useReducer(reducer, initialActions);
  console.log("app calling custom hook useAPI");
  const saveActions = useAPI(endPoint);
  console.log("app after calling custom hook useAPI", saveActions);
  useEffect(
    () => {
      console.log("app effect running");
      console.log("app effect running: check payload ", saveActions);
      console.log("app before dispatching");
      dispatch({ type: "GET_ACTIONS", payload: saveActions });
      console.log("app after dispatching");
    },
    [saveActions]
  );
  return (
    <ActionsItemsContext.Provider value={{ state, dispatch }}>
      {console.log("render")}
      <ActionsList />
    </ActionsItemsContext.Provider>
  );
}
