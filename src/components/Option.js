function Option({ questions, dispatch, answer }) {
  const hasAnswred = answer !== null;
  return (
    <div>
      <div className="options">
        {questions.options.map((option, i) => (
          <button
            className={`btn btn-option ${i === answer ? 'answer' : ''} ${
              hasAnswred
                ? i === questions.correctOption
                  ? 'correct'
                  : 'wrong'
                : ''
            }`}
            key={option}
            disabled={hasAnswred}
            onClick={() => dispatch({ type: 'newAnswer', payload: i })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Option;
