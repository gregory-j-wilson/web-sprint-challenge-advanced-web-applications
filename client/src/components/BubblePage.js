import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { axiosWithAuthGet } from "../utils/axiosWithAuthGet"

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);



useEffect(() => {
  axiosWithAuthGet()
  // axiosWithAuth()
  //     .get('/api/colors')
      .then(res => {
        setColorList(res)
      })
}, [])



  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
