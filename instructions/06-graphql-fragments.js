export default `
## Create and Use Fragments

Making use of a fragment starts by defining it. The key thing to remember 
when defining a fragment is that it needs to have a **name** and we need 
to specify which GraphQL \`type\` the fragment should operate on.

Within the body of the fragment is where we put the query we want to
reuse.

Here's an example:

\`\`\`js
fragment contactDetails on Contact {
  id
  firstName
  lastName
}
\`\`\`

Once the fragment is defined, calling for it is simply a matter of placing it
where the query would normally go, preceding it with ellipses.

\`\`\`js
query {
  contacts {
    ...contactDetails
  }
}
\`\`\`

### Challenge

Write two fragments: one called \`contactVitals\` and the other called \`contactExtras\`.

The \`contactVitals\` fragment should ask for \`id\`, \`firstName\`, and \`lastName\`.

The \`contactExtras\` fragments should ask for \`description\` and \`image\`.
`;
