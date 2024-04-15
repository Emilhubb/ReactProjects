import React, { useEffect, useState } from "react";
import "./App.css";

function Hours() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      const fullDate = `${hours}:${minutes}:${seconds}`;
      setTime(fullDate);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="hours">
        <div class="ring-container">
          <div class="ringring"></div>
          <div class="circle"></div>
        </div>
        <i id="currentDate"> {time} </i>
      </div>
    </div>
  );
}

export default Hours;
