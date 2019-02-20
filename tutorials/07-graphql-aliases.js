export default `
# GraphQL Aliases

When we write a GraphQL query, we're not limited to making that query for just a single field or object type at one time. Instead, we can query many types at the same time. For example, let's say we wanted to make a query for \`contacts\` and \`friends\`. Instead of writing separate queries, we could simply put them together.

\`\`\`js
query {
  contacts {
    id
    firstName
    lastName
  }
  friends {
    id
    email
  }
}
\`\`\`

This works well if we want to make a single query for different resources, but what would happen if we wanted to make two distinct queries for the *same* resource? For example, perhaps we want to get back a list of \`contacts\` in two different forms.

For the sake of example, let's say we wanted to search for \`contacts\` by the first letter of the first name *or* the first letter of the last name. One approach might be to write the same query twice, the first taking arguments for searching by \`firstName\` and the second for searching by \`lastName\`.

\`\`\`js
query {
  contacts(where: { firstName_starts_with: 'A' }) {
    id
    firstName
    lastName
  }
  contacts(where: { lastName_starts_with: 'A' }) {
    id
    firstName
    lastName
  }
}
\`\`\`

This is an intuitive first attempt, but if we were to run this query, we'd get the following error:

\`\`\`js
{
  "message": "Field 'contacts' conflict because they have differing arguments. Use different aliases on the fields to fetch both if this was intentional.
}
\`\`\`

It turns out that we can't query for the same fields in a single query, at least not directly like this. Doing so creates a naming conflict in the response which won't be processable. After all, we can't repeat keys on a single object.

Fortunately, there is a way to accomplish what we're after here by using _**aliases**_.

### Using GraphQL Aliases

By default, when we make a query, the key name in the result matches up with the field name that we query for. If we query for \`contacts\`, the JSON result will be on a key called \`contacts\`. This doesn't need to be the case though.

GraphQL gives us a syntax to define a specific name to the result of a query. This means we can affect the name of the key that our data comes back on.


If we wanted to rewrite our earlier query to get a valid result, we could use aliases for each use of the \`contacts\` field.

\`\`\`js
query {
  contactsByFirstName: contacts(where: { firstName_starts_with: "A" }) {
    id
    firstName
    lastName
  }
  contactsByLastName: contacts(where: { lastName_starts_with: "A" }) {
    id
    firstName
    lastName
  }
}
\`\`\`

By simply appending a unique name before the field name that we want to query for, we're telling GraphQL to put the result on a key that will be unique. With this approach, we can query for the same field as many times as we like and the result set will be named uniquely.

`;
