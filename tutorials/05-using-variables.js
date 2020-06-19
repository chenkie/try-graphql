export default `
# Using GraphQL Variables

Passing arguments in a GraphQL query is a common and, often, completely necessary task so we can get back exactly the data we want. We've seen how to pass arguments in as static values, but this isn't ideal. Doing so, we're basically hard-coding them into every query we write. It's likely that most of our queries will need to be *dynamic* and pass different arguments depending on the situation. This is where _**variables**_ come in.

You're likely already familiar with the concept of a variable. In essence, a variable is a reference in our code that can be assigned different values. We use variables when we can only determine the value for something at runtime, or if a value needs to change over time.

It's tempting to think that we might just be able to pass our GraphQL queries a variable in the same way we might pass in a variable to a function call in JavaScript. With that notion, we might write something like this:

\`\`\`js
let lastName = "McFly";

...

query {
  contacts(where: { lastName: lastName }) {
    id
    firstName
    lastName
  }
}
\`\`\`

In this pseudo code, we're holding the string value \`"McFly"\` on a variable called \`lastName\` and then we're trying to pass it to the \`where\` condition in the query. This approach won't work.

### GraphQL Variable Gotchas

GraphQL imposes some hard rules around how variables are declared and used in queries. The first thing we need to know is that if we want to use a variable, we need to *declare* it at the top of our query. Working from the example above, that looks like this:

\`\`\`js
query($lastName: String!) {
  ...
}
\`\`\`

There are two things to take note of here. First, we declare a variable by putting \`$\` before the variable name. We can name it whatever we like, but it needs to have \`$\` at the start.

The second is that when we declare a variable, it *must* be given a \`type\`. In this example, it's probably easy to guess that the variable is going to be of type \`String\`.

What's that \`!\` doing there you ask? That means that there *must* be a value for the variable. If we left the \`!\` off, passing a value in for the variable would be optional.

The general recipe for declaring a variable goes: \`$\` + **variable name** + \`:\` + **type**.

After the variable is declared, we're able to use it in our query. That looks like this:

\`\`\`js
query($lastName: String!) {
  contacts(where: { lastName: $lastName }) {
    id
    firstName
    lastName
  }
}
\`\`\`

Notice here that the only change we've made to the argument passed into \`contacts\` is we've put the \`$\` ahead of \`lastName\`. We're able to do this because we previously declared the variable. If we hadn't declared it, GraphQL wouldn't know about it and we'd get an error.

That's all there is to it for declaring and using a variable, but there's still a problem: the variable doesn't yet have a value.

### Assigning a Value to a Variable

The way we assign a value to a variable depends heavily on the context in which we're using GraphQL. Since we're using the **GraphiQL** editor at this point, the way we put a value in is going to look quite a bit different from how we do so in a JavaScript application. However, it all boils down to providing a JSON document that has the value we want to assign.

In the GraphiQL editor, we give our variable a value by opening the **Query Variables** panel and providing a document like such:

\`\`\`json
{
  "lastName": "Doe"
}
\`\`\`
`;
