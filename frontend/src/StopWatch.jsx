import React, { useState, useRef } from "react";
import "./StopWatch.css";
import stopImage from "./assets/StopWatch.jpg";

const StopWatch = () => {
  const [time, setTime] = useState(0);        
  const [isRunning, setIsRunning] = useState(false);
  const [log, setLog] = useState([]); 
  const intervalRef = useRef(null);          

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      const timeInSeconds = (time / 1000).toFixed(2);
      setLog(prev => [...prev, `Stopped at: ${timeInSeconds}s`]);
    } else {
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
    setLog([]);
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-side left">
        <img src={stopImage} alt="Stopwatch" className="stopwatch-image" />
      </div>

      <div className="stopwatch-card">
        <h2 className="stopwatch-title">Stopwatch</h2>
        <div className="stopwatch-time">
          {(time / 1000).toFixed(2)}s
        </div>
        <div className="stopwatch-buttons">
          <button 
            className={`stopwatch-btn ${isRunning ? "stop" : ""}`} 
            onClick={toggleTimer}
          >
            {isRunning ? "Stop" : "Start"}
          </button>
          <button 
            className="stopwatch-btn reset" 
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="stopwatch-side right">
        <div className="stopwatch-log">
          <h4>Log</h4>
          {log.length === 0 ? <p>No log yet</p> : (
            <ul>
              {log.map((entry, idx) => <li key={idx}>{entry}</li>)}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
