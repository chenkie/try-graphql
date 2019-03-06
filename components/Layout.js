import Navbar from './Navbar';
import Head from 'next/head';
import Footer from './Footer';
import font from './../fonts/rustycolapen.woff';

const Layout = props => (
  <div>
    <Head>
      <title>
        Try GraphQL! Interactive GraphQL Tutorial | {props.currentStep.title}
      </title>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700"
        rel="stylesheet"
      />
      <link href="/static/graphiql-material.css" rel="stylesheet" />
      <link rel="shortcut icon" type="image/png" href="/static/favicon.png" />
      <meta property="og:title" content={props.currentStep.title} />
      <meta
        property="og:url"
        content={`https://trygql.com/lesson/${props.currentStep.id}`}
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dkpz9r2q7/image/upload/v1550613652/trygql_bxykiu.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="1200" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={props.currentStep.title} />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/dkpz9r2q7/image/upload/v1550613652/trygql_bxykiu.jpg"
      />
    </Head>
    <Navbar emitter={props.emitter} />
    {props.children}
    <Footer />
    <style jsx global>
      {`
        * {
          font-family: 'Open Sans', sans-serif;
        }

        @font-face {
          font-family: rustyColaPen;
          src: url(${font});
        }

        body {
          margin: 0;
          background: #f1f1f1;
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }

        .Tutorial h1 {
          margin-top: 0;
        }

        pre .token-line .token.plain,
        pre .token-line .token.property {
          color: #fff1fd !important;
        }

        pre .token-line .token.punctuation {
          font-weight: bold;
        }

        pre .token-line .token.string,
        .cm-string {
          color: #ffc5e8 !important;
        }

        .prism-code {
          letter-spacing: 1px;
          background-image: linear-gradient(
            to bottom right,
            #2a034f,
            #271638
          ) !important;
          display: inline-block;
          width: 90%;
          padding: 20px;
          color: #fff1fd;
          border-radius: 15px;
          background-image: linear-gradient(to bottom right, #2a034f, #271638);
          overflow-y: scroll;
        }

        .CodeMirror-code * {
          font-size: 15px;
          letter-spacing: 1px;
        }

        .CodeMirror-linenumber {
          color: #a5a5a5 !important;
        }

        .CodeMirror-guttermarker-subtle {
          color: #757575 !important;
        }

        .graphiql-container .editorBar .variable-editor {
          background: #5d4169 !important;
        }

        .graphiql-container .editorBar .variable-editor {
          padding-left: 0 !important;
        }

        .graphiql-container .editorBar .variable-editor .variable-editor-title {
          color: #f9f9f9 !important;
          padding-left: 20px !important;
        }

        .graphiql-container .toolbar-button {
          background: #009d9c !important;
          border-radius: 5px !important;
        }

        .graphiql-container .editorWrap {
          overflow-y: hidden;
        }

        code {
          color: #b31975;
          background: #fff1f1;
          padding: 2px 7px;
          border-radius: 8px;
        }

        .graphiql-container {
          border-radius: 0.5rem;
        }

        .graphiql-container .title span {
          font-family: rustyColaPen;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .graphiql-container .title span em {
          text-transform: lowercase;
        }

        .cm-ws,
        .cm-punctuation {
          font-size: 17px;
          color: #848484 !important;
        }

        .graphiql-container div.CodeMirror span.CodeMirror-matchingbracket {
          color: #d491bd !important;
        }

        .CodeMirror-scroll {
          background-image: linear-gradient(
            to bottom right,
            #2a034f,
            #271638
          ) !important;
        }

        .CodeMirror-gutter {
          background: #5d4069 !important;
        }
      `}
    </style>
  </div>
);

export default Layout;
