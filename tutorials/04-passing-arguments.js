export default `
# Passing Arguments in a Query

The concept of passing an argument in a function call is likely a familiar one. That is, after all, the benefit of using functions––we can write code a single time and perform the same operation on different inputs.

When we make a request for data from a backend, it turns out that we often need to supply some information in the request. For example, we might need to pass values for the backend to filter and/or sort by, or perhaps we need to send a search term to use for a database lookup. Whatever the parameters we might need to send, it eventually works out to be something akin to a function call. We make a request to an endpoint that is written once (kind of a like a function) that accepts certain parameters (arguments) to be used to give back different data results.

If we were working with a REST API and we wanted to get back a list of contacts sorted by last name in descending order, we might have an endpoint that accepts a request like this:

\`\`\`bash
GET http://mysite.com/api/contacts?sort=last_name&order=desc
\`\`\`

It's a useful convention to include "arguments" as query parameters like this, but that's not the only way to communicate them. We could also use path paramters or, if the request type was something like \`POST\`, we could send information in a payload.

As we might expect, we will almost certainly need to be able to do the same kind of work in a GraphQL query. We will almost always want to get back a reduced set of data and it will often be necessary to sort, order, and filter it in some way.

In GraphQL, this is accomplished by passing _**arguments**_ to a query. 

### Passing Arguments

If our GraphQL server exposes a list of contacts, we can make a query for all the contacts like this:

\`\`\`js
query {
  contacts {
    id
    firstName
    lastName
    email
  }
}
\`\`\`

With an unbounded query like this, we're very likely to get back a list of results that is longer than what we want. If the server implementation is a good one, there will be some upper limit on the number of results returned, but we still wouldn't have the ability to specify exactly the number of results we want returned.

We can solve this by passing arguments to our GraphQL query.

\`\`\`js
query {
  contacts(limit: 10) {
    id
    firstName
    lastName
    email
  }
}
\`\`\`

Passing an argument to a GraphQL query looks similar to passing an argument in a function call. We open up a set of parentheses and place the value. The difference here is that we also need to specify the name of the argument, in this case \`limit\`. On the backend, the value for \`limit\` would be used to return a smaller set of data.
  
Notice that the value we passed in as an argument is a number. If we wanted to pass in a string value, we would need to put it in double quotes––single quotes won't do.

Let's say we wanted to get a list of contacts sorted by a certain field and ordered in a certain direction. If our GraphQL server supported it, we could do something like this:

\`\`\`js
query {
  contacts(sortBy: "lastName", order: "DESC") {
    id
    firstName
    lastName
    email
  }
}
\`\`\`

The key thing here is that if we want to pass a certain argument, the GraphQL server we are querying needs to support it and know how to respond to it. If we were to try to pass an argument that the server didn't know how to handle, we would get an error back.
`;
