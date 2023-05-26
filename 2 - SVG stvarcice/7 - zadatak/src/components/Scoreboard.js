import { useEffect, useState } from "react";

const Scoreboard = ({
  shouldAddNewScore,
  runningTimeToBorder,
  startTime,
  jumpTime,
}) => {
  const [scoreEntries, setScoreEntries] = useState([]);

  const getNewEntry = () => {
    const runningTimeToBorderInMs = runningTimeToBorder * 1000;
    const runningTimeInMs = jumpTime - startTime;

    const precisionPercent = runningTimeInMs / runningTimeToBorderInMs;

    const getScore = () => {
      if (isNaN(precisionPercent) || jumpTime < startTime) {
        return 0;
      }

      console.log(jumpTime, startTime, precisionPercent);

      const missingToMax = 10000 - Math.floor(precisionPercent * 10000);
      const score = 2500 - missingToMax;

      return score > 0 ? score : 0;
    };

    return {
      runningTimeToBorder: runningTimeToBorder.toFixed(2),
      score: getScore(),
    };
  };

  useEffect(() => {
    if (shouldAddNewScore) {
      setScoreEntries((prev) => [...prev, getNewEntry()]);
    }
  }, [shouldAddNewScore]);

  const sortedScore = scoreEntries.sort((a, b) => b.score - a.score);

  if (!sortedScore.length) {
    return null;
  }

  return (
    <table className="scoreboard">
      <thead>
        <tr>
          <th>Running time to border</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {sortedScore.map((entry, index) => (
          <tr key={index}>
            <td>{entry.runningTimeToBorder}</td>
            <td>{entry.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Scoreboard;
