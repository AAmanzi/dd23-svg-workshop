import classNames from "classnames";

const SunAndMoon = ({ isNight, width = "200", height = "200" }) => {
  return (
    <svg
      className="sunAndMoonSvg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 216 216"
      width={width}
      height={height}
    >
      <mask id="overflowHidden">
        <rect x="0" y="0" width="216" height="216" fill="black" />
        <path
          stroke="white"
          strokeWidth={16}
          fill="white"
          d="M108,108
m-100,0
c0,-50 50,-100 100,-100
c50,0 100,50 100,100
c0,50 -50,100 -100,100
c-50,0 -100,-50 -100,-100"
        />
      </mask>
      <g mask="url(#overflowHidden)">
        <mask id="moonClip">
          <rect x="0" y="0" width="216" height="216" fill="white" />
          <ellipse
            className="ellipse"
            cx="130"
            cy="65"
            rx={isNight ? "130" : "0"}
            ry={isNight ? "80" : "30"}
            fill="black"
          />
        </mask>
        <path
          className={classNames("sunOrMoon", {
            sun: !isNight,
            moon: isNight,
          })}
          strokeWidth={16}
          d="M108,108
m-100,0
c0,-50 50,-100 100,-100
c50,0 100,50 100,100
c0,50 -50,100 -100,100
c-50,0 -100,-50 -100,-100"
          mask="url(#moonClip)"
        />
        <g mask="url(#moonClip)">
          <ellipse
            className={classNames("ellipse", {
              day: !isNight,
              night: isNight,
            })}
            cx="130"
            cy="65"
            rx={isNight ? "146" : "0"}
            ry={isNight ? "96" : "30"}
          />
        </g>
      </g>
    </svg>
  );
};

export default SunAndMoon;
