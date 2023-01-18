import { useState, useEffect } from "react";
import axios from "axios";
import { MousesIndex } from "./MousesIndex";
import {MousesNew } from "./MousesNew";
import { Modal } from "./Modal";
import { MousesShow } from "./MousesShow";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";


export function Content() {

  const [mouses, setMouses] = useState([]);
  const [isMousesShowVisible, setIsMousesShowVisible] = useState(false);
  const [currentMouse, setCurrentMouse] = useState({});

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

  const handleShowMouse = (mouse) => {
    console.log("handleShowMouse", mouse);
    setIsMousesShowVisible(true);
    setCurrentMouse(mouse);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsMousesShowVisible(false);
  };

  useEffect(handleIndexMouses, []);

  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <MousesNew onCreateMouse={handleCreateMouse}/>
      <MousesIndex mouses={mouses} onShowMouse={handleShowMouse} />
      <Modal show={isMousesShowVisible} onClose={handleClose}>
        <MousesShow mouse={currentMouse} />
      </Modal>
    </div>
  );
}