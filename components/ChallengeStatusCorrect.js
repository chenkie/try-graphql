import { withRouter } from 'next/router';
import Link from 'next/link';

function getRandomEmoji() {
  const emojis = ['👏', '💪', '👌', '🖖', '🤙', '🙌', '👊'];
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

const ChallengeStatusCorrect = props => {
  const { id } = props.router.query;
  const { lessonMap } = props;
  const nextLessonId = getNextLessonId(id, lessonMap);
  return (
    <div className="ChallengeStatusCorrect">
      <span>
        <span className="emoji">{getRandomEmoji()}</span>
        <span className="message">Great work!</span>
        <Link
          as={`/lesson/${nextLessonId}`}
          href={`/lesson?id=${nextLessonId}`}
        >
          {nextLessonId !== 'complete' && (
            <a className="next-button">Next Lesson</a>
          )}
        </Link>
      </span>
      <style jsx>
        {`
          .ChallengeStatusCorrect {
            text-align: center;
          }

          .ChallengeStatusCorrect .emoji {
            font-size: 42px;
          }

          .ChallengeStatusCorrect .message {
            position: relative;
            bottom: 4px;
            margin-left: 10px;
            font-size: 22px;
            color: #ffffff;
          }

          .ChallengeStatusCorrect .next-button {
            position: relative;
            bottom: 5px;
            left: 15px;
            color: #fff;
            text-decoration: none;
            background: linear-gradient(to bottom right, #ff9f1d, #e22e8a);
            padding: 10px;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
            box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
              0 5px 15px 0 rgba(0, 0, 0, 0.08);
          }

          .ChallengeStatusCorrect .next-button:hover {
            transform: translateY(-2px);
          }
        `}
      </style>
    </div>
  );
};

export default withRouter(ChallengeStatusCorrect);
