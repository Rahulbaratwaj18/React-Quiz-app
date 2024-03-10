import React from "react";

export default function FinishScreen({ points, totalPoints ,dispatch}) {
  const percentage = (points / totalPoints) * 100;
  return (
    <>
      <div className="result">
        <p>
          You have scored {points} out of {totalPoints} ({Math.ceil(percentage)})%
        </p>
      </div>

      <button className="btn btn-ui" onClick={() => dispatch({type:"restart"})}>Restart Quiz</button>
    </>
  );
}
