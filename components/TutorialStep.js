import LessonLink from './LessonLink';
import CompletionIndicator from './CompletionIndicator';

import { withRouter } from 'next/router';

const TutorialStep = props => {
  const { step } = props;
  const { asPath } = props.router;
  const stepClasses =
    asPath === `/lesson/${step.id}`
      ? 'TutorialStep active'
      : 'TutorialStep inactive';
  const isLastStep = step.id === '10-wrapping-up';
  const completionText = step.complete ? 'Complete' : 'Incomplete';
  return (
    <div>
      <LessonLink id={step.id}>
        <div className={stepClasses}>
          <CompletionIndicator
            complete={step.complete}
            isLastStep={isLastStep}
          />
          <div className="tutorial-step-text">
            <span className="label-text">{step.title}</span>
            {!isLastStep && (
              <span className="completion-text">{completionText}</span>
            )}
          </div>
        </div>
      </LessonLink>
      <style jsx>
        {`
          .TutorialStep {
            display: flex;
            padding: 10px 20px;
            background: #fff;
            margin: 10px;
            border-radius: 0.5rem;
            cursor: pointer;
            justify-content: space-between;
            white-space: nowrap;
            transition: 0.3s;
          }

          .TutorialStep.inactive {
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
          }

          .TutorialStep.active,
          .TutorialStep:hover {
            box-shadow: 0 5px 30px 0 rgba(249, 150, 223, 0.5),
              0 5px 15px 0 rgba(249, 150, 223, 0.3);
          }

          .label-text {
            color: #4c4c4c;
            align-self: center;
            font-family: 'Merriweather Sans', sans-serif;
            font-weight: bold;
          }

          .tutorial-step-text {
            display: flex;
            flex-direction: column;
          }

          .completion-text {
            text-transform: uppercase;
            font-size: 10px;
            margin: 5px 0 5px 0;
            margin-left: 1px;
            color: #949494;
          }
        `}
      </style>
    </div>
  );
};

export default withRouter(TutorialStep);
