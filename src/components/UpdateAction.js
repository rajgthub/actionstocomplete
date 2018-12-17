import React, { useState, useContext, useEffect } from "react";
import axios from 'axios'
import ActionsItemsContext from "../context";
const endPoint = "https://actions-api-vxgbeepczf.now.sh/actions/";
export default function UpdateAction() {
  const [updateAction, setUpdateAction] = useState("");
  const { state, dispatch } = useContext(ActionsItemsContext);
  //Provider and consumer
  console.log(state);
  useEffect(
    () => {
      if (state.currentAction.descr) {
        setUpdateAction(state.currentAction.descr);
      }
    },
    [state.currentAction]
  );

  const handleFormSubmit = async e => {
    e.preventDefault();
    const res = await axios.patch(endPoint + state.currentAction.id, {
      descr: updateAction
    });
    dispatch({
      type: "UPDATE_ACTION",
      payload: res.data
    });
  };
  return (
    <>
      <form className="flex justify-center p-5" onSubmit={handleFormSubmit}>
        <input
          className="border-black border-solid border-2"
          type="text"
          onChange={e => setUpdateAction(e.target.value)}
          value={updateAction}
        />
      </form>
    </>
  );
}
