export default `
## Use GraphQL Aliases

When we make a query for a particular field, the result will be contained on a field with the same name. For example, if we queried for a list of \`contacts\`, the results would be contained in an array on a key named \`contacts\`.

If we want to query for the same field more than once in the same document, we need to give a unique name to each instance of that query. When we do this, the result will be returned on a key of that same unique name so that our programs can make sense of everything.

### Challenge

In a single query, request a list of \`contacts\` ordered in four different ways: by \`firstName\` ascending, by \`firstName\` descending, by \`lastName\` ascending and by \`lastName\` descending.

Use the following aliases:

\`\`\`js
contactsByFirstNameAsc
contactsByFirstNameDesc
contactsByLastNameAsc
contactsByLastNameDesc
\`\`\`

Ask for the \`id\`, \`firstName\`, and \`lastName\` fields.

**Hint:** Instead of passing the \`where\` argument to \`contacts\`, pass \`orderBy\`.
`;
