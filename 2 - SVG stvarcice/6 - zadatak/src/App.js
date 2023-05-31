import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import "./styles/index.css";
import "./styles/player.css";
import "./styles/scoreboard.css";

import Player from "./components/Player";
import Action from "./components/Action";
import Scoreboard from "./components/Scoreboard";

const getRandomTotalRunTime = () => {
  return Math.random() * (5 - 1) + 1;
};

const App = () => {
  const stopWhenHitBorderId = useRef();
  const startTime = useRef();
  const jumpTime = useRef();

  const [isRunning, setIsRunning] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  const [hasStopped, setHasStopped] = useState(false);

  const [totalRunningTime, setTotalRunningTime] = useState(
    getRandomTotalRunTime()
  );

  const runningTimeToBorder = (totalRunningTime / 4) * 3;

  const stop = () => {
    setHasStopped(true);
  };

  const startRunning = () => {
    setIsRunning(true);

    startTime.current = Date.now();
    stopWhenHitBorderId.current = window.setTimeout(
      stop,
      runningTimeToBorder * 1000
    );
  };

  const jump = () => {
    setIsJumping(true);

    jumpTime.current = Date.now();
    window.clearTimeout(stopWhenHitBorderId.current);

    setTimeout(stop, 800);
  };

  const reset = () => {
    setIsRunning(false);
    setIsJumping(false);
    setHasStopped(false);
    setTotalRunningTime(getRandomTotalRunTime());
  };

  return (
    <div className="container">
      <Action
        isRunning={isRunning}
        isJumping={isJumping}
        hasStopped={hasStopped}
        onStart={startRunning}
        onJump={jump}
        reset={reset}
      />
      <div className="trackContainer">
        <div className="track">
          <div className="runwayContainer">
            <div className="runway" />
          </div>
          <div className="sand" />
        </div>
        <div
          className={classNames("playerContainer")}
          style={{
            animation: `${
              isRunning
                ? `run ${totalRunningTime}s linear ${
                    hasStopped ? "paused" : "running"
                  } forwards`
                : ""
            } ${isJumping ? ", jump 800ms linear" : ""}`,
          }}
        >
          <Player isRunning={isRunning && !hasStopped} />
        </div>
      </div>
      <Scoreboard
        shouldAddNewScore={isRunning && hasStopped}
        runningTimeToBorder={runningTimeToBorder}
        startTime={startTime.current}
        jumpTime={jumpTime.current}
      />
    </div>
  );
};

export default App;
