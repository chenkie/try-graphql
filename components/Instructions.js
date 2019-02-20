import TutorialContent from './TutorialContent';

const Instructions = props => (
  <div className="ChallengeInstructions">
    <TutorialContent content={props.content} />
    <style jsx>
      {`
        .ChallengeInstructions {
          background: #eee;
          padding: 20px 40px;
          width: 40%;
          background: #fefefe;
          margin: 10px 20px 20px 20px;
          border-radius: 0.5rem;
          box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
            0 5px 15px 0 rgba(0, 0, 0, 0.08);
        }
      `}
    </style>
  </div>
);

export default Instructions;
