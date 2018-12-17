import React, { useState, useContext } from "react";
import ActionsItemsContext from "../context";

export default function AddEdidAction() {
  const [action, setAction] = useState("");
  const [updateAction, setUpdateAction] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const { state, dispatch } = useContext(ActionsItemsContext);
  //Provider and consumer
  if (state.currentAction.descr && !isUpdate) {
    setIsUpdate(true);
    setUpdateAction(state.currentAction.descr);
  }
  const handleFormSubmit = e => {
    e.preventDefault();
    if (!state.currentAction.id) {
      dispatch({ type: "ADD_ACTION", payload: { descr: action } });
      setAction("");
    } else {
      dispatch({
        type: "UPDATE_ACTION",
        payload: { ...state.currentAction, descr: updateAction }
      });
    }
  };
  return (
    <>
      <form className="flex justify-center p-5" onSubmit={handleFormSubmit}>
        <input
          className="border-black border-solid border-2"
          type="text"
          onChange={e => {
            if (!isUpdate) {
              setAction(e.target.value);
            } else {
              setUpdateAction(e.target.value);
            }
          }}
          value={action || updateAction}
        />
      </form>
    </>
  );
}
