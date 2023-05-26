import React, { useState } from "react";

import Toggle from "./components/Toggle2";

const App = () => {
  const [isNight, setIsNight] = useState(false);

  const toggleNight = () => {
    setIsNight((prev) => !prev);
  };

  return <Toggle isNight={isNight} onChange={toggleNight} />;
};

export default App;
