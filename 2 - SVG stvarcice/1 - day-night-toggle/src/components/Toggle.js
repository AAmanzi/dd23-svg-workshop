import classNames from "classnames";

import SunAndMoon from "./SunAndMoon";
import Clouds from "./Clouds";
import Stars from "./Stars";

const Toggle = ({ isNight, onChange }) => {
  return (
    <label
      className={classNames("container", {
        nightBackground: isNight,
        dayBackground: !isNight,
      })}
    >
      <input
        className="hidden"
        type="checkbox"
        checked={isNight}
        onChange={onChange}
      />
      <div className={classNames("cloudsWrapper", { active: !isNight })}>
        <Clouds />
      </div>
      <div className={classNames("starsWrapper", { active: isNight })}>
        <Stars />
      </div>
      <div className={classNames("sunAndMoonWrapper", { night: isNight })}>
        <SunAndMoon isNight={isNight} width="168" height="168" />
      </div>
    </label>
  );
};

export default Toggle;
