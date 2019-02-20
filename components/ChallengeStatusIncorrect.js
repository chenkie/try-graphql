import { withRouter } from 'next/router';

function getRandomEmoji() {
  const emojis = ['🙁', '😮', '🙃', '😞', '🤞', '✋'];
  const randomNum = Math.floor(Math.random() * Math.floor(emojis.length - 1));
  return emojis[randomNum];
}

const getNextLessonId = (id, lessonMap) => {
  const currentLessonIndex = lessonMap.indexOf(
    lessonMap.find(l => l.id === id)
  );
  const nextLesson = lessonMap[currentLessonIndex + 1];
  if (!nextLesson) {
    return 'complete';
  }
  return nextLesson.id;
};

const ChallengeStatusIncorrect = props => {
  const { id } = props.router.query;
  const { lessonMap } = props;
  const nextLessonId = getNextLessonId(id, lessonMap);
  return (
    <div className="ChallengeStatusIncorrect">
      <span>
        <span className="emoji">{getRandomEmoji()}</span>
        <span className="message">Oops, try again!</span>
      </span>
      <style jsx>
        {`
          .ChallengeStatusIncorrect {
            text-align: center;
          }

          .ChallengeStatusIncorrect .emoji {
            font-size: 42px;
          }

          .ChallengeStatusIncorrect .message {
            position: relative;
            margin-left: 10px;
            bottom: 5px;
            font-size: 22px;
            color: #ffffff;
          }

          .ChallengeStatusIncorrect .next-button:hover {
            transform: translateY(-2px);
          }
        `}
      </style>
    </div>
  );
};

export default withRouter(ChallengeStatusIncorrect);
