import React, { useContext, useState } from "react";
import AddAction from "./AddAction";
import UpdateAction from "./UpdateAction";
import ActionsItemsContext from "../context";
import axios from "axios";
import UploadImage from "./UploadImage";
const endPoint = process.env.REACT_APP_API_URL;
export default function ActionsList() {
  const [displayPlus, setDisplayPlus] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const { state, dispatch } = useContext(ActionsItemsContext);
  const [uploadImageWithId, setUploadImageId] = useState(null);

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">
        {state.actions.length > 0
          ? `You have ${state.actions.length} actions items to complete!`
          : "Nothing to complete"}
      </h1>
      {isUpdate && <UpdateAction />}
      {uploadImageWithId && <UploadImage actionId={uploadImageWithId} />}
      {displayPlus ? (
        <AddAction />
      ) : (
        <button
          onClick={() => {
            setDisplayPlus(true);
            setIsUpdate(false);
          }}
        >
          <img
            src="https://icon.now.sh/plus/8b0000"
            alt="no delete icon"
            className="h-10"
          />
        </button>
      )}
      <ul className="list-reset text-white p-0">
        {state.actions.map(action => {
          return (
            <li
              key={action.id}
              className={
                action.completed
                  ? "flex items-center bg-green my-4 py-4 border-dashed border-2 border-black"
                  : "flex items-center bg-orange-dark my-4 py-4 border-dashed border-2 border-black"
              }
            >
              <span className="flex-1 ml-12 cursor-pointer ">
                {action.descr}
              </span>
              <button
                onClick={() => {
                  dispatch({
                    type: "UPDATE_ACTION",
                    payload: action
                  }); //populate the currentAction to be updated
                  setIsUpdate(true);
                  setDisplayPlus(false);
                }}
              >
                <img
                  src="https://icon.now.sh/edit/8b0000"
                  alt="no edit icon"
                  className="h-6 add"
                />
              </button>
              <button
                onClick={async () => {
                  await axios.delete(endPoint + action.id);
                  dispatch({
                    type: "DELETE_ACTION",
                    payload: { id: action.id }
                  });
                }}
              >
                <img
                  src="https://icon.now.sh/delete/8b0000"
                  alt="no delete icon"
                  className="h-6"
                />
              </button>
              <h1>
                {action.completed && (
                  <img
                    src="https://icon.now.sh/check/0050c5"
                    alt="no check icon"
                    className="h-6"
                  />
                )}
              </h1>
              <button
                onClick={async () => {
                  setUploadImageId(action.id);
                  setDisplayPlus(false);
                }}
              >
                {!action.completed && (
                  <img
                    src="https://icon.now.sh/file/0050c5"
                    alt="no file action"
                    className="h-6"
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
