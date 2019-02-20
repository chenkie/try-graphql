export default `
# Make a Query from a JavaScript App

So far, we've been using the GraphiQL editor to make our queries. This is a handy tool, but it's really only for debugging purposes. What we ultimately want to do is make a query from some kind of application to our GraphQL server so we can display some data.

There are many different libraries that exist to make it easy to query from a JavaScript application. In fact, pretty much every major framework out there has some kind of third-party library for handling client-side GraphQL. Perhaps the most popular one is [_**Apollo**_](https://www.apollographql.com/).

GraphQL libraries like Apollo provide a nice developer experience, but underneath it all, they make it possible to do the same kind of work the GraphiQL editor is doing, just from a JavaScript app. There can be a lot involved with that, but the concept is a simple one: take a query and send it in a request to the GraphQL server. Then, handle the results that come back.

These libraries help immensely to perform these tasks, and they do a whole lot more as well. However, we don't *need* to use a library to make a GraphQL request from our apps if we don't want to. Instead, we can simply write the query string and pass it into a request ourselves.

In JavaScript, we can use template literals to craft our query.

\`\`\`js
const query = \`
  query {
    contacts {
      id
      firstName
      lastName
    }
  }
\`
\`\`\`

This looks a lot like what we've been writing in the GraphiQL editor, only now it's a string held on a JavaScript \`const\`.

To make use of this query, we need to pass it in a request to our GraphQL server. There are a few different ways we can do this, but perhaps one of the easiest is to use the browser's **Fetch** API.

\`\`\`js
...
const url = 'https://mysite.com/graphql';

const fetchData = {
  method: 'POST',
  body: JSON.stringify({ query }),
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

fetch(url, fetchData)
  .then(res => res.json())
  .then(({data}) => {
    // use the data
  })
  .catch(err => console.log(err));
\`\`\`

The **Fetch** API gives us a way to send requests without the need for any kind of XHR library. We need to specify a few options for our request, which we do here in the \`fetchData\` object.

All requests that go to a GraphQL API should be of type \`POST\`. It's possible to make a GraphQL server that responds to other kinds, but as per the GraphQL spec, all communication is to happen over \`POST\` requests.

The query itself needs to be added to an object with the \`query\` key and then stringified into the request body. The result will be the same data we'd see in the right side of our GraphiQL editor.
`;
