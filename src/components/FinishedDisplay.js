function FinishedDisplay({ points, maxPoints, highscore, dispatch }) {
  const percentage = Math.ceil((points / maxPoints) * 100);

  let emoji;

  if (percentage === 100) emoji = '🥇';
  if (percentage >= 50) emoji = '🎉';
  if (percentage < 50) emoji = '🤔';
  return (
    <>
      <p className="result">
        {emoji}
        You scored <strong>{points}</strong> out of {maxPoints} ({percentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedDisplay;
