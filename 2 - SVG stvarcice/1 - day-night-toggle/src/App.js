import React, { useState } from "react";

import "./styles/index.css";
import "./styles/stars.css";
import "./styles/sunAndMoon.css";

import Toggle from "./components/Toggle";
import classNames from "classnames";

const App = () => {
  const [isNight, setIsNight] = useState(true);

  const toggleNight = () => {
    setIsNight((prev) => !prev);
  };

  return (
    <div className={classNames("wrapper", { night: isNight })}>
      <h2 className="title">
        Treba sacekat 10s da proradi animacija oblaka :(
      </h2>
      <Toggle isNight={isNight} onChange={toggleNight} />
    </div>
  );
};

export default App;
