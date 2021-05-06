import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat} from '@apollo/client'

// Create cache:
const cache = new InMemoryCache({
  addTypename: false
});

const httpLink = new HttpLink({ uri: process.env.REACT_APP_NO_SQL_URL });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: "Bearer "+localStorage.getItem('authToken') || null,
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
