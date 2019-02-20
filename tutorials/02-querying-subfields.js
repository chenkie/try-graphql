export default `
# Querying Sub-Fields

The example query in the previous step is simple in many ways. One important way is that it was _**resolved out of the root Query type**_.

\`\`\`js
query {
  message
}
\`\`\`

That description is a bit of a mouthful and we don't yet have all the pieces to make sense of it as is, but we'll get there. For now, let's break it down in a simpler way.

When we write queries with GraphQL, we are ultimately concerned with how they terminate. In GraphQL parlance, we'd say that we're interested in how the queries _**resolve**_.

In the example above, we know that the query terminates at the \`message\` field because there's nothing that comes after it. There's no further querying that happens, it simply ends at \`message\`. This means that without even running this query, we know we can expect to get some value back for the \`message\` field.

This simple example query isn't the kind we'd see too often in practice. That's because the data we need to model with GraphQL is very often more complex than this. Most of the time, we'll want to make a query for something like an \`object\`, a structure that has any number of individual fields, each of them holding various types of data.

### GraphQL Types

In GraphQL, the concept of something like an \`object\` is called a \`type\`. A \`type\` in GraphQL can roughly be thought of as a structure that hold various \`field\`s. Each field can then terminate (resolve) with its own data.

Building off the starting example, let's think of what other data we might associate with a message. For example, perhaps it has a title, a body, and an author. Our current query isn't sufficient to get those pieces of data because it resolves with a simple string. Instead, we could ask for a selection of sub-fields on the \`message\` type.

\`\`\`js
query {
  message {
    title
    body
    author
  }
}
\`\`\`

Without even running this query, it's easy to see what we can expect. The query itself is shaped somewhat like the output we'll get from it. Since there's nothing next to the \`title\`, \`body\` and \`author\` fields, we know we can expect some values to be resolved out of them.

\`\`\`json
"data": {
  "message": {
    "title": "Just for you",
    "body": "Oh hi there!",
    "author": "Ryan Chenkie"
  }
}
\`\`\`
`;
