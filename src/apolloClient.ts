import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat} from '@apollo/client'

// Create cache:
const cache = new InMemoryCache({
  addTypename: false
});

const httpLink = new HttpLink({ uri: 'https://hmisgraph.azurewebsites.net/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: localStorage.getItem('token') || null,
    }
  });

  return forward(operation);
})

// Create an client:
const client = new ApolloClient({
    cache,
    link: concat(authMiddleware, httpLink),
  });

export default client;
