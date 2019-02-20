import React, { Component } from 'react';
import GraphiQL from 'graphiql';
import 'graphiql-material-theme';

import { withRouter } from 'next/router';

import {
  response0,
  response1,
  response2,
  response3,
  response4,
  response5,
  response6,
  response7
} from './../responses';

const expectedResponses = [
  { id: '00-getting-started', data: response0 },
  { id: '01-graphql-query-basics', data: response1 },
  { id: '02-querying-subfields', data: response2 },
  { id: '03-getting-a-list-of-data', data: response3 },
  { id: '04-passing-arguments', data: response4 },
  { id: '05-using-variables', data: response5 },
  { id: '06-graphql-fragments', data: response6 },
  { id: '07-graphql-aliases', data: response7 }
];

function isCorrectResponse(response, step) {
  const expectedResponse = expectedResponses.find(r => r.id === step);
  if (expectedResponse && expectedResponse.data) {
    return response === JSON.stringify(expectedResponse.data);
  }
  return false;
}

function makeProgressMap(tutorialSteps) {
  const progress = {};
  tutorialSteps.forEach(s => (progress[s.id] = { completed: false }));
  return progress;
}

function updateProgress(tutorialSteps, stepId, completed, emitter) {
  if (!localStorage.getItem('progress')) {
    localStorage.setItem(
      'progress',
      JSON.stringify(makeProgressMap(tutorialSteps))
    );
  }

  const progressMap = localStorage.getItem('progress');

  if (progressMap) {
    const updatedProgressMap = Object.assign({}, JSON.parse(progressMap), {
      [stepId]: { completed }
    });
    localStorage.setItem('progress', JSON.stringify(updatedProgressMap));
  }

  emitter.emit('statusChange', { stepId, completed });
}

function getGraphQLFetcher(url, id, tutorialSteps, emitter) {
  return function graphQLFetcher(graphQLParams) {
    return fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(graphQLParams)
    }).then(async response => {
      const { data } = await response.clone().json();
      const isSchema = data.hasOwnProperty('__schema');
      const stringifiedResponse = JSON.stringify(data);
      const currentStep = tutorialSteps.find(s => s.id === id);

      if (currentStep && currentStep.id && !isSchema) {
        if (isCorrectResponse(stringifiedResponse, currentStep.id)) {
          updateProgress(tutorialSteps, currentStep.id, true, emitter);
        } else {
          updateProgress(tutorialSteps, currentStep.id, false, emitter);
        }
      }
      return response.json();
    });
  };
}

function isStackblitz(url) {
  return /stackblitz.com/.test(url);
}

class Editor extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { id } = this.props.router.query;
    const { emitter, tutorialSteps } = this.props;
    const defaultQuery = this.props.defaultQueries.find(q => q.id === id);
    const currentStep = this.props.tutorialSteps.find(s => s.id === id);

    return (
      <div className="gql-container">
        {typeof window !== 'undefined' && !isStackblitz(currentStep.api) && (
          <GraphiQL
            fetcher={getGraphQLFetcher(
              currentStep.api,
              id,
              tutorialSteps,
              emitter
            )}
            query={defaultQuery.query}
            response={''}
          />
        )}
        {isStackblitz(currentStep.api) && <iframe src={currentStep.api} />}
        <style jsx>
          {`
            .gql-container {
              min-height: 700px;
              width: 100%;
              margin: 10px 20px 20px 10px;
              border-radius: 0.5rem;
              box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
                0 5px 15px 0 rgba(0, 0, 0, 0.08);
            }

            iframe {
              width: 100%;
              height: 100%;
              border: none;
            }
          `}
        </style>
      </div>
    );
  }
}

export default withRouter(Editor);
