import React, { useContext } from "react";
import axios from "axios";
import ActionsItemsContext from "../context";
const endPoint = "https://actions-api-vxgbeepczf.now.sh/actions/";
export default function UploadImage(props) {
  const { dispatch } = useContext(ActionsItemsContext);
  const handleImageUpload = async e => {
    try {
      const { name } = e.target.files[0];
      const res = await axios.patch(endPoint + props.actionId, {
        completed: true,
        imgUrl: name
      });
      dispatch({
        type: "COMPLETE_ACTION",
        payload: res.data
      });
    } catch (e) {
      console.log('something went wrong!');
      
    }
  };
  return (
    <>
      {props.actionId && <h1>{props.actionId}</h1>}
      <input type="file" onChange={handleImageUpload} />
    </>
  );
}
