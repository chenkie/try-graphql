import React, { Component } from 'react';
import TutorialStep from './TutorialStep';

function getHydratedSteps(tutorialSteps) {
  const progressMap = JSON.parse(localStorage.getItem('progress'));
  if (!progressMap) {
    return tutorialSteps;
  }
  return tutorialSteps.map(s => {
    s.complete = progressMap[s.id] ? progressMap[s.id].completed : false;
    return s;
  });
}

export default class TutorialNavBar extends Component {
  state = {
    tutorialSteps: null
  };
  constructor(props) {
    super();
    props.emitter.on('statusChange', () => {
      this.setState({
        tutorialSteps: getHydratedSteps(this.props.tutorialSteps)
      });
    });
  }

  componentDidMount() {
    this.setState({
      tutorialSteps: getHydratedSteps(this.props.tutorialSteps)
    });
  }

  render() {
    return (
      <div className="TutorialNavBar">
        {this.state.tutorialSteps &&
          this.state.tutorialSteps.map((step, key) => (
            <TutorialStep step={step} key={key} />
          ))}
        <style jsx>
          {`
            .TutorialNavBar {
              display: flex;
              background-color: #f1f1f1;
              padding: 10px;
              overflow-y: scroll;
            }

            .TutorialNavBar a {
              text-decoration: none;
            }
          `}
        </style>
      </div>
    );
  }
}
