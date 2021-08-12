import React, { useState } from "react";
import {Helmet} from "react-helmet";

function Timer() {
  const [time, updateTime] = useState(
    new Date().toLocaleTimeString("en-IT", { hour12: false })
  );

  function getTime() {
    updateTime(new Date().toLocaleTimeString("en-IT", { hour12: false }));
  }
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <Helmet>
        <link rel="stylesheet" href="timerStyles.css"/>
      </Helmet>
      <h1>{time}</h1>
     
    </div>
  );
}

export default Timer;
