export default function NextButton({
  dispatch,
  answer,
  index,
  maxNoofQuestions,
}) {
  if (answer === null) return;

  if (index < maxNoofQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === maxNoofQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
  
}
