const CompletionIndicator = props => {
  const { complete, isLastStep } = props;
  return (
    <div className="completion-marker">
      {complete && !isLastStep && <span className="complete">✓</span>}
      {!complete && !isLastStep && <span className="incomplete">X</span>}
      {isLastStep && <span className="emoji">👋</span>}

      <style jsx>
        {`
          .completion-marker {
            font-size: 28px;
          }

          .complete {
            color: #009d9c;
            margin-right: 12px;
          }

          .emoji {
            margin-right: 12px;
          }

          .incomplete {
            color: #ea4876;
            font-family: rustyColaPen;
            font-weight: bold;
            margin-right: 19px;
          }
        `}
      </style>
    </div>
  );
};

export default CompletionIndicator;
