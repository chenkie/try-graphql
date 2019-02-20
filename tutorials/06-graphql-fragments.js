export default `
# GraphQL Fragments

Perhaps you're familiar with the concept of writing DRY (don't repeat yourself) code. 
When possible, and within reason, it's a good idea to only write a piece of code a single time. 
If the *exact* same bit of code is to be used in multiple places throughout the application, 
there's no sense in writing it out fully each time it's needed. Rather, we should make a reference 
to that piece of code––perhaps on a variable––and call for that reference whenever we need it.

The same holds true when working with GraphQL. It's often the case that we'll need to perform the 
same query in many different places throughout our applications. In many cases, while the values 
for the argument variables might change, the overall query stays the same.

GraphQL gives us a construct which makes it easy to define part of a query only one time and then 
to reuse it across our application: **fragments**.

### Fragment Syntax

There are two things we need to know about fragments before we can put them to use: how to 
**define** them and how to **consume** them.

The first thing we need to do is define the fragment. If we wanted to create a reusable query for 
our \`contacts\` data, that fragment might look like this:

\`\`\`js
fragment contactQuery on Contact {
  id
  firstName
  lastName
}
\`\`\`

We start with the keyword \`fragment\` and give it a name. This name can be whatever we like.

We then need to specify which GraphQL \`type\` the fragment operates on. In the example above, we assume 
that we have a type called \`Contact\` in our GraphQL schema and that it gives us back fields called \`id\`, 
\`firstName\`, and \`lastName\`.

With our fragment defined, we can now make use of it. To use it in a query, we simply need to "spread it out" 
where our query would normally go.

\`\`\`js
query {
  contacts {
    ...contactQuery
  }
}
\`\`\`

Notice that the \`contactQuery\` fragment is preceded by ellipses. If you're familiar with the spread syntax 
in JavaScript, the concept will likely seem familiar. In JavaScript, the spread syntax allows us to "spread out" the contents 
of an array. In a similar fashion, calling for a GraphQL fragment is to "spread out" the contents of the query 
fragment.
`;
