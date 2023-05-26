const Clouds = () => {
  const durationInSeconds = 20;
  const duration = `${durationInSeconds}s`;

  const firstRowStartOffset = durationInSeconds / 5;
  const secondRowStartOffset = durationInSeconds / 4;
  const thirdRowStartOffset = durationInSeconds / 5;

  return (
    <svg
      width="873"
      height="227"
      viewBox="0 0 873 227"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <animateMotion
            dur={duration}
            repeatCount="indefinite"
            path="M700,0 L-173,0"
          />
          <rect
            x="53"
            y="193.932"
            width="76.6142"
            height="27.4067"
            rx="13.7033"
            fill="#90B3E7"
          />
          <circle cx="80.0953" cy="189.883" r="15.8834" fill="#90B3E7" />
          <circle cx="101.585" cy="192.686" r="14.3262" fill="#90B3E7" />
        </g>
        <g>
          <animateMotion
            dur={duration}
            repeatCount="indefinite"
            path="M550,0 L-323,0"
            begin={`${firstRowStartOffset}s`}
          />
          <rect
            x="229"
            y="166.932"
            width="76.6142"
            height="27.4067"
            rx="13.7033"
            fill="#90B3E7"
          />
          <circle cx="256.095" cy="162.883" r="15.8834" fill="#90B3E7" />
          <circle cx="277.585" cy="165.686" r="14.3262" fill="#90B3E7" />
        </g>
        <g>
          <animateMotion
            dur={duration}
            repeatCount="indefinite"
            path="M300,0 L-573,0"
            begin={`${firstRowStartOffset * 2}s`}
          />
          <rect
            x="454.265"
            y="199.049"
            width="76.6142"
            height="27.4067"
            rx="13.7033"
            fill="#90B3E7"
          />
          <circle cx="481.36" cy="195" r="15.8834" fill="#90B3E7" />
          <circle cx="502.85" cy="197.803" r="14.3262" fill="#90B3E7" />
        </g>
        <g>
          <animateMotion
            dur={duration}
            repeatCount="indefinite"
            path="M200,0 L-673,0"
            begin={`${firstRowStartOffset * 3}s`}
          />
          <rect
            x="542"
            y="169.932"
            width="76.6142"
            height="27.4067"
            rx="13.7033"
            fill="#90B3E7"
          />
          <circle cx="569.095" cy="165.883" r="15.8834" fill="#90B3E7" />
          <circle cx="590.585" cy="168.686" r="14.3262" fill="#90B3E7" />
        </g>
        <g>
          <animateMotion
            dur={duration}
            repeatCount="indefinite"
            path="M0,0 L-873,0"
            begin={`${firstRowStartOffset * 4}s`}
          />
          <rect
            x="764"
            y="184.932"
            width="76.6142"
            height="27.4067"
            rx="13.7033"
            fill="#90B3E7"
          />
          <circle cx="791.095" cy="180.883" r="15.8834" fill="#90B3E7" />
          <circle cx="812.585" cy="183.686" r="14.3262" fill="#90B3E7" />
        </g>
      </g>
      <g>
        <g>
          <animateMotion
            dur={duration}
            repeatCount="indefinite"
            path="M700,0 L-173,0"
          />
          <rect
            x="87"
            y="75.3077"
            width="104.077"
            height="37.2308"
            rx="18.6154"
            fill="#CFDEF5"
          />
          <circle cx="123.808" cy="69.8077" r="21.5769" fill="#CFDEF5" />
          <circle cx="153" cy="73.6154" r="19.4615" fill="#CFDEF5" />
        </g>
        <g>
          <animateMotion
            dur={duration}
            repeatCount="indefinite"
            path="M450,0 L-423,0"
            begin={`${secondRowStartOffset}s`}
          />
          <rect
            x="377"
            y="83.4615"
            width="104.077"
            height="37.2308"
            rx="18.6154"
            fill="#CFDEF5"
          />
          <circle cx="413.808" cy="77.9616" r="21.5769" fill="#CFDEF5" />
          <circle cx="443" cy="81.7693" r="19.4615" fill="#CFDEF5" />
        </g>
        <g>
          <animateMotion
            dur={duration}
            repeatCount="indefinite"
            path="M250,0 L-623,0"
            begin={`${secondRowStartOffset * 2}s`}
          />
          <rect
            x="508"
            y="120.462"
            width="104.077"
            height="37.2308"
            rx="18.6154"
            fill="#CFDEF5"
          />
          <circle cx="544.808" cy="114.962" r="21.5769" fill="#CFDEF5" />
          <circle cx="574" cy="118.769" r="19.4615" fill="#CFDEF5" />
        </g>
        <g>
          <animateMotion
            dur={duration}
            repeatCount="indefinite"
            path="M50,0 L-823,0"
            begin={`${secondRowStartOffset * 3}s`}
          />
          <rect
            x="712.308"
            y="71.077"
            width="104.077"
            height="37.2308"
            rx="18.6154"
            fill="#CFDEF5"
          />
          <circle cx="749.115" cy="65.5769" r="21.5769" fill="#CFDEF5" />
          <circle cx="778.308" cy="69.3846" r="19.4615" fill="#CFDEF5" />
        </g>
      </g>
      <g>
        <g>
          <animateMotion
            dur={duration}
            repeatCount="indefinite"
            path="M800,0 L-73,0"
          />
          <rect y="46" width="123" height="44" rx="22" fill="white" />
          <circle cx="43.5" cy="39.5" r="25.5" fill="white" />
          <circle cx="78" cy="44" r="23" fill="white" />
        </g>
        <g>
          <animateMotion
            dur={duration}
            repeatCount="indefinite"
            path="M500,0 L-373,0"
            begin={`${thirdRowStartOffset}s`}
          />
          <rect x="246" y="54" width="123" height="44" rx="22" fill="white" />
          <circle cx="289.5" cy="47.5" r="25.5" fill="white" />
          <circle cx="324" cy="52" r="23" fill="white" />
        </g>
        <g>
          <animateMotion
            dur={duration}
            repeatCount="indefinite"
            path="M400,0 L-473,0"
            begin={`${thirdRowStartOffset * 2}s`}
          />
          <rect x="399" y="32" width="123" height="44" rx="22" fill="white" />
          <circle cx="442.5" cy="25.5" r="25.5" fill="white" />
          <circle cx="477" cy="30" r="23" fill="white" />
        </g>
        <g>
          <animateMotion
            dur={duration}
            repeatCount="indefinite"
            path="M150,0 L-723,0"
            begin={`${thirdRowStartOffset * 3}s`}
          />
          <rect x="597" y="99" width="123" height="44" rx="22" fill="white" />
          <circle cx="640.5" cy="92.5" r="25.5" fill="white" />
          <circle cx="675" cy="97" r="23" fill="white" />
        </g>
        <g>
          <animateMotion
            dur={duration}
            repeatCount="indefinite"
            path="M0,0 L-873,0"
            begin={`${thirdRowStartOffset * 4}s`}
          />
          <rect x="750" y="41" width="123" height="44" rx="22" fill="white" />
          <circle cx="793.5" cy="34.5" r="25.5" fill="white" />
          <circle cx="828" cy="39" r="23" fill="white" />
        </g>
      </g>
    </svg>
  );
};

export default Clouds;
