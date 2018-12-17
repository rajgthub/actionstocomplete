import React, { useState, useContext } from "react";
import axios from 'axios'
import uuidv4 from 'uuid/v4'
import ActionsItemsContext from "../context";
const endPoint = process.env.REACT_APP_API_URL;
export default function AddAction() {
  const [action, setAction] = useState("");
  const {dispatch } = useContext(ActionsItemsContext);
  //Provider and consumer
  const handleFormSubmit = async e => {
    e.preventDefault();
    const res = await axios.post(endPoint, {
      id: uuidv4(),
      descr: action,
      imgUrl: "",
      completed: false
    });
    dispatch({ type: "ADD_ACTION", payload: res.data });
    setAction("");
  };
  return (
    <>
      <form className="flex justify-center p-5" onSubmit={handleFormSubmit}>
        <input
          className="border-black border-solid border-2"
          type="text"
          onChange={e => setAction(e.target.value)}
          value={action}
        />
      </form>
    </>
  );
}
