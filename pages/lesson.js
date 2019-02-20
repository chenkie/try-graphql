import React, { Component } from 'react';
import Layout from './../components/Layout';
import TutorialNavBar from './../components/TutorialNavBar';
import Tutorial from './../components/Tutorial';
import ChallengeStatusBar from './../components/ChallengeStatusBar';
import Instructions from './../components/Instructions';
import Editor from './../components/Editor';
import Router from 'next/router';
import * as ee from 'event-emitter';

const emitter = ee();

import { withRouter } from 'next/router';

import {
  tutorial00,
  tutorial01,
  tutorial02,
  tutorial03,
  tutorial04,
  tutorial05,
  tutorial06,
  tutorial07,
  tutorial08,
  tutorial09,
  tutorial10
} from './../tutorials';

import {
  instructions00,
  instructions01,
  instructions02,
  instructions03,
  instructions04,
  instructions05,
  instructions06,
  instructions07,
  instructions08,
  instructions09
} from './../instructions';

const lessonMap = [
  {
    id: '00-getting-started',
    title: 'What is GraphQL?',
    tutorial: tutorial00,
    instructions: instructions00,
    query: 'query {\n\thello\n}',
    api: 'https://api-1.trygql.com/graphql'
  },
  {
    id: '01-graphql-query-basics',
    title: 'GraphQL Query Basics',
    tutorial: tutorial01,
    instructions: instructions01,
    api: 'https://api-1.trygql.com/graphql'
  },
  {
    id: '02-querying-subfields',
    title: 'Querying Subfields',
    tutorial: tutorial02,
    instructions: instructions02,
    api: 'https://api-1.trygql.com/graphql'
  },
  {
    id: '03-getting-a-list-of-data',
    title: 'Getting a List of Data',
    tutorial: tutorial03,
    instructions: instructions03,
    api: 'https://api-1.trygql.com/graphql'
  },
  {
    id: '04-passing-arguments',
    title: 'Passing Arguments',
    tutorial: tutorial04,
    instructions: instructions04,
    api: 'https://api.trygql.com'
  },
  {
    id: '05-using-variables',
    title: 'Using Variables',
    tutorial: tutorial05,
    instructions: instructions05,
    api: 'https://api.trygql.com'
  },
  {
    id: '06-graphql-fragments',
    title: 'GraphQL Fragments',
    tutorial: tutorial06,
    instructions: instructions06,
    api: 'https://api.trygql.com'
  },
  {
    id: '07-graphql-aliases',
    title: 'GraphQL Aliases',
    tutorial: tutorial07,
    instructions: instructions07,
    api: 'https://api.trygql.com'
  },
  {
    id: '08-query-from-javascript',
    title: 'Query from a JavaScript App',
    tutorial: tutorial08,
    instructions: instructions08,
    api: 'https://stackblitz.com/edit/js-wr4buu?embed=1&file=index.js'
  },
  {
    id: '09-query-from-a-react-app',
    title: 'Query from a React App',
    tutorial: tutorial09,
    instructions: instructions09,
    api: 'https://stackblitz.com/edit/react-nhvoxp?embed=1&file=index.js'
  },
  {
    id: '10-wrapping-up',
    title: 'Wrapping Up',
    tutorial: tutorial10
  }
];

const getCurrentLesson = (id, lessonMap) => {
  return lessonMap.find(l => l.id === id);
};

class Lesson extends Component {
  state = {
    challengeStatus: 'incorrect',
    showChallengeStatus: false
  };

  constructor(props) {
    super();
    emitter.on('statusChange', status => {
      let newStatus = status.completed ? 'correct' : 'incorrect';

      this.setState({
        challengeStatus: newStatus,
        showChallengeStatus: true
      });
    });
  }

  componentDidMount() {
    const { id } = this.props.router.query;
    if (
      id === '08-query-from-javascript' ||
      id === '09-query-from-a-react-app'
    ) {
      this.setState({ challengeStatus: 'neutral', showChallengeStatus: true });
    }
  }

  componentDidUpdate() {
    Router.onRouteChangeStart = url => {
      if (
        url === '/lesson/08-query-from-javascript' ||
        url === '/lesson/09-query-from-a-react-app'
      ) {
        this.setState({
          challengeStatus: 'neutral',
          showChallengeStatus: true
        });
      } else {
        this.setState({ showChallengeStatus: false });
      }
    };
  }

  render() {
    const { id } = this.props.router.query;
    const { tutorial, instructions } = getCurrentLesson(id, lessonMap);

    const tutorialSteps = lessonMap.map(l => {
      return {
        id: l.id,
        title: l.title,
        complete: false,
        api: l.api
      };
    });

    const currentStep = tutorialSteps.find(s => s.id === id);
    const isLastStep = id === '10-wrapping-up';

    const defaultQueries = lessonMap.map(l => {
      return {
        id: l.id,
        query: l.query
      };
    });

    return (
      <Layout emitter={emitter} currentStep={currentStep}>
        <TutorialNavBar tutorialSteps={tutorialSteps} emitter={emitter} />
        <Tutorial content={tutorial} isLastStep={isLastStep} />
        <ChallengeStatusBar
          emitter={emitter}
          status={this.state.challengeStatus}
          showStatus={this.state.showChallengeStatus}
          lessonMap={lessonMap.map(l => {
            return {
              id: l.id
            };
          })}
        />
        {!isLastStep && (
          <div className="challenge">
            <Instructions content={instructions} />
            <Editor
              emitter={emitter}
              defaultQueries={defaultQueries}
              tutorialSteps={tutorialSteps}
            />
          </div>
        )}

        <style jsx>
          {`
            .challenge {
              display: flex;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default withRouter(Lesson);
