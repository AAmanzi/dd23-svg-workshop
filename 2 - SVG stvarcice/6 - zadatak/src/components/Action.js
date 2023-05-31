import { useEffect } from "react";

const Action = ({
  isRunning,
  isJumping,
  hasStopped,
  onStart,
  onJump,
  reset,
}) => {
  const getConfig = () => {
    if (!isRunning) {
      return {
        onClick: onStart,
        label: "Start",
      };
    }

    if (!isJumping && !hasStopped) {
      return {
        onClick: onJump,
        label: "Jump",
      };
    }

    return {
      onClick: reset,
      label: "Reset",
    };
  };
  const config = getConfig();

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === " ") {
        config.onClick();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [config.onClick]);

  return <h1 onClick={config.onClick}>Press space to: {config.label}</h1>;
};

export default Action;
