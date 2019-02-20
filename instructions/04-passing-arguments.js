export default `
## Pass Arguments in a Query

The GraphQL server we are contected to can give back a list of \`contacts\`. We can get back the full list with a query like this:

\`\`\`js
query {
  contacts {
    id
    firstName
    lastName
  }
}
\`\`\`

### Challenge

Using arguments, write a query that will send back *only* those contacts that have the last name "McFly". Ask for the \`id\`, \`firstName\`, and \`lastName\` fields.

**Hint**: The argument to pass is nested within a top-level \`where\` object. For example:

\`\`\`js
where: { ... }
\`\`\`
`;
