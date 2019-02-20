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
    return '10-wrapping-up';
  }
  return nextLesson.id;
};

function markLessonComplete(stepId, emitter) {
  const progressMap = localStorage.getItem('progress');

  if (progressMap) {
    const updatedProgressMap = Object.assign({}, JSON.parse(progressMap), {
      [stepId]: { completed: true }
    });
    localStorage.setItem('progress', JSON.stringify(updatedProgressMap));
  }

  emitter.emit('statusChange', { stepId, completed: true });
}

const ChallengeStatusNeutral = props => {
  const { id } = props.router.query;
  const { lessonMap } = props;
  const nextLessonId = getNextLessonId(id, lessonMap);
  return (
    <div className="ChallengeStatusNeutral">
      <span>
        <span className="emoji">{getRandomEmoji()}</span>
        <span className="message">
          Once you're done, mark this lesson complete!
        </span>

        <a
          className="next-button"
          onClick={() => markLessonComplete(id, props.emitter)}
        >
          Mark Complete
        </a>
      </span>
      <style jsx>
        {`
          .ChallengeStatusNeutral {
            text-align: center;
          }

          .ChallengeStatusNeutral .emoji {
            font-size: 42px;
          }

          .ChallengeStatusNeutral .message {
            position: relative;
            bottom: 4px;
            margin-left: 10px;
            font-size: 22px;
            color: #ffffff;
          }

          .ChallengeStatusNeutral .next-button {
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

          .ChallengeStatusNeutral .next-button:hover {
            transform: translateY(-2px);
          }
        `}
      </style>
    </div>
  );
};

export default withRouter(ChallengeStatusNeutral);
