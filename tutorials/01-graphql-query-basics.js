export default `
# What is a GraphQL Query?

GraphQL is all about making it easy and intuitive for us to ask for data from a backend. Just like when we ask for data from a REST API or other data-bearing service, once the data arrives at our client app, we can do whatever we want with it.

To interact with data from a GraphQL-powered backend, we need to perform an \`operation\`. The most basic type of operation we can perform is called a \`query\`.

To perform a \`query\`, we need to use a special language that GraphQL expects and understands. We can refer to this language as the "query language" (hence, the **QL** in GraphQL).

To get the ball rolling, let's look at a very basic GraphQL query.

\`\`\`js
query {
  message
}
\`\`\`

This is just about the simplest GraphQL operation we can make. We could slim it down a bit further by omitting the \`query\` keyword and just using the braces, but let's keep \`query\` around for good measure for now.

The very first thing we see in this operation is the \`query\` keyword followed by an opening brace. This is our way of telling GraphQL that we want to make a \`query\` operation as opposed to some other type like a \`mutation\`. Inside the opening brace is where we describe the data that we want to ask for. In this case, that's a \`field\` called \`message\`.

The query in and of itself doesn't give us the information we ultimately want, but that's to be expected. Instead, this is our way of telling GraphQL what we want it to _return_.

So what exactly do we do with this query? We send it to a GraphQL backend! If that backend knows about the fields we are querying and how to return data to us for those fields, we will (hopefully) get a JSON response that can be used in our client app. In this example, that response might look something like this:

\`\`\`json
"data": {
  "message": "Oh hi there!"
}
\`\`\`

`;
