import { useState, useEffect } from "react";
import axios from "axios";
import { MousesIndex } from "./MousesIndex";
import {MousesNew } from "./MousesNew";


export function Content() {

  const [mouses, setMouses] = useState([]);

  const handleIndexMouses = () => {
    console.log("handleIndexMouses");
    axios.get("http://localhost:3000/mouses.json").then((response) => {
      console.log(response.data);
      setMouses(response.data);
    });
  };

  const handleCreateMouse = (params, successCallback) => {
    console.log("handleCreateMouse", params);
    axios.post("http://localhost:3000/mouses.json", params).then((response) => {
      setMouses([...mouses, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexMouses, []);

  return (
    <div>
      <MousesNew onCreateMouse={handleCreateMouse}/>
      <MousesIndex mouses={mouses} />
    </div>
  );
}