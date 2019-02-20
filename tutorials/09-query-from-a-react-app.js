export default `
# Make a Query from a React App

If you're doing modern web development, perhaps you're using React. If not, maybe you've at least dabbled with it. There's nothing stopping us from picking another frontend technology when using GraphQL––we can use anything we want. It turns out, though, that the React ecosystem has great support for GraphQL and has built up quite a bit of tooling around it.

As previously mentioned, one of the most popular set of tools for working with GraphQL is produced by Apollo. These tools have first-class support for React and make it very simple to develop components that are smart about making GraphQL queries.

With Apollo, we get a special \`Query\` React component. This component takes a GraphQL query and returns a result. A small amount of scaffolding is required to make the \`Query\` component work, but it's minimal. At the very least, we need to instantiate an \`ApolloClient\` and pass it to the \`ApolloProvider\` component.

\`\`\`js
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";

const client = new ApolloClient({
  uri: "https://api.trygql.com"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Query query={query}>
          {({ loading, error, data }) => {
            // display loading, error, or data
          }}
        </Query>
      </ApolloProvider>
    );
  }
}
\`\`\`
`;
