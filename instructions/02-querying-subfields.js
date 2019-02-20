export default `
## Get Some Sub-Fields!

In most real-world cases, our data will be object-shaped. If we can query for something in the shape of an object from GraphQL, it means that the GraphQL server we are connected to has a dedicated \`type\` for that data. We know that a dedicated \`type\` exists if we can make a selection of sub-fields on it.

### Challenge
Make a query for \`message\`, but this time, treat it like a \`type\` and ask for a selection of sub-fields. In particular, ask for the \`title\`, \`content\`, and \`timestamp\` fields.

### Extra Challenge

The fields listed above aren't the only ones available on the \`message\` type. Are you able to see which other fields are available? What are two different ways we can find out what these extra fields are from the GraphiQL editor?
`;
