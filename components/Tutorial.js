import TutorialContent from './TutorialContent';

const Tutorial = props => (
  <section className="Tutorial">
    <TutorialContent content={props.content} isLastStep={props.isLastStep} />
    <style jsx>
      {`
        .Tutorial {
          padding: 40px;
          columns: 2 200px;
          background: #fefefe;
          margin: 0px 20px 20px 20px;
          border-radius: 0.5rem;
          box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
            0 5px 15px 0 rgba(0, 0, 0, 0.08);
        }
      `}
    </style>
  </section>
);

export default Tutorial;
