import { useState, useEffect } from "react";
import axios from "axios";
import { MousesIndex } from "./MousesIndex";


export function Content() {

  const [mouses, setMouses] = useState([]);

  const handleIndexMouses = () => {
    console.log("handleIndexMouses");
    axios.get("http://localhost:3000/mouses.json").then((response) => {
      console.log(response.data);
      setMouses(response.data);
    });
  };

  useEffect(handleIndexMouses, []);

  return (
    <div>
      <MousesIndex mouses={mouses} />
    </div>
  );
}