import Markdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import ScriptTag from 'react-script-tag';

const TutorialContent = props => (
  <div>
    <Markdown source={props.content} renderers={{ code: CodeBlock }} />
    {props.isLastStep && (
      <ScriptTag
        async
        data-uid="56de4211aa"
        src="https://f.convertkit.com/56de4211aa/e0a7d02020.js"
      />
    )}
  </div>
);

export default TutorialContent;
