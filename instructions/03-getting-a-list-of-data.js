export default `
## Query for a List of Data

Getting data back in the form of a list (or array) requires a query that is similar to the one we'd make to get back a single object. For any given query we make, it's the server's responsibiity to form the response in the shape of a list and to tell us that we can expect a list back.

If, for example, we were to query a GraphQL server that returns a simple string when we ask for a field called \`secretMessage\`, that query might look like this:

\`\`\`js
query {
  secretMessage
}
\`\`\`

If that same field were to instead respond with a list of strings, no matter what the length, we'd make the exact same query:

\`\`\`js
query {
  secretMessage
}
\`\`\`

GraphQL gives us some ways to be able to tell what the shape of the response will be ahead of time so that we can handle the response correctly in our apps.

### Challenge

For this challenge, create a query which responds with a list of \`messages\`. For fields, ask for \`title\`, \`content\`, \`author\`, and \`timestamp\`. 

Let's put a twist on this one though. Instead of just modifying the last query slightly, have this new query return **both** the single \`message\` object from the previous step as well as a list of \`messages\` at the same time.
`;
