export default `
# Querying for a GraphQL List

It's very often the case that we need to work with data that is object-shaped. When we want to represent some data in GraphQL that is shaped like an object, we call it a GraphQL _**type**_.

Displaying data on a website or in an application often comes down rendering a bunch of objects. In JavaScript terms, we might think about this as an array of objects. In GraphQL, an array-shaped structure is called a _**list**_.

While it's often the case that a list query will return one that is filled with object types, lists are not limited to holding objects. A list can contain any type of data that GraphQL supports.

### List Querying Syntax

It turns out we already have the tools necessary to retrieve a list of object data. In fact, making a query for a list of data looks identical to making a query for a single object.

If we had a GraphQL query type called \`messages\`, getting a full list would look like this:

\`\`\`js
query {
  messages {
    title
    body
    author
  }
}
\`\`\`

With this query, we could expect the response to contain an array of objects.

\`\`\`json
"data": {
  "messages": [
    {
      "title": "Message 1",
      "body": "Oh hey there",
      "author": "Ryan Chenkie"
    },
    {
      "title": "Message 2",
      "body": "Good to see you",
      "author": "Ryan Chenkie"
    },
    {
      "title": "Message 3",
      "body": "Aren't you looking good today",
      "author": "Ryan Chenkie"
    }
  ]
}
\`\`\`

The syntax we use to get an object is exactly the same as what we use to get a list. This begs a question: how? We might expect that if we wanted to get two different data structures that we'd need to make two different kinds of queries. It turns out the reason we don't is because this is a detail handled on the server side.

If we want to query for some data using GraphQL, there needs to be a server in place to serve that data. One of the key components of a GraphQL server is the **schema**––a definition of which queries can be made and what information they return. It's the schema on the server that is responsible for setting the data return type as either a single object or a list of objects. This makes it easier on the client side as we can use the same syntax for both.
`;
