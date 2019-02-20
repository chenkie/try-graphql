export default `
## Use Variables in Arguments

The recipe for using variables in a GraphQL query is roughly as follows:

1. Declare the variables at the top. Write the variable name, preceded by \`$\`, and then give the variable a type.

\`\`\`js
query($name: String) { ... }
\`\`\`

2. When passing arguments, state the argument name and point it to the variable name

\`\`\`js
query($name: String) { 
  friends(name: $name) {
    id
    firstName
    lastName
  }
}
\`\`\`

3. Give the variable a value somehow. When using the GraphiQL editor, a JSON object can be provided in the Query Variables pane.

\`\`\`json
{
  "name": "Biff"
}
\`\`\`

### Challenge

The GraphQL server we're using gives us the ability to pass in arguments to specify which character a field starts with. It also allows us to say that we want a particular field to *contain* certain characters.

Write a query on the \`contacts\` type which gives back all contacts whose last name starts with **"M"** and whose first name contains **"e"**. Pass a \`where\` object as an argument to the query with two properties: \`lastName_starts_with\` and \`firstName_contains\`.

Ask for the \`id\`, \`firstName\`, \`lastName\`, and \`description\` fields.

Rather than hard-coding the values for these arguments, use variables. Declare the variables on the first line next to \`query\` and provide a JSON object in the "Query Variables" pane with the proper values.
`;
