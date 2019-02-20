import ChallengeStatusIncorrect from './ChallengeStatusIncorrect';
import ChallengeStatusCorrect from './ChallengeStatusCorrect';
import ChallengeStatusNeutral from './ChallengeStatusNeutral';

const ChallengeStatusBar = props => {
  const { status, showStatus, lessonMap } = props;
  let classNames;

  if (status === 'correct') {
    classNames = 'ChallengeStatusBar correct';
  } else if (status === 'incorrect') {
    classNames = 'ChallengeStatusBar incorrect';
  } else if (status === 'neutral') {
    classNames = 'ChallengeStatusBar neutral';
  }
  return (
    <div className="status-bar-container">
      {!!showStatus && (
        <div className={classNames}>
          {status === 'correct' && (
            <ChallengeStatusCorrect lessonMap={lessonMap} />
          )}
          {status === 'incorrect' && (
            <ChallengeStatusIncorrect lessonMap={lessonMap} />
          )}
          {status === 'neutral' && (
            <ChallengeStatusNeutral
              lessonMap={lessonMap}
              emitter={props.emitter}
            />
          )}
        </div>
      )}

      <style jsx>
        {`
          .status-bar-container {
            position: sticky;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
          }

          .ChallengeStatusBar {
            margin: 20px 20px 10px 20px;
            border-radius: 10px;
            padding: 20px;
            min-height: 50px;
            box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
              0 5px 15px 0 rgba(0, 0, 0, 0.08);
          }

          .ChallengeStatusBar.correct {
            background: linear-gradient(to bottom right, #0f9b8e, #008c9c);
          }

          .ChallengeStatusBar.incorrect {
            background: linear-gradient(to bottom right, #ff1b56, #d41e80);
          }

          .ChallengeStatusBar.neutral {
            background: linear-gradient(to bottom right, #620f62, #370653);
          }
        `}
      </style>
    </div>
  );
};

export default ChallengeStatusBar;
