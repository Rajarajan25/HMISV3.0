import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloLink } from 'apollo-link';

// Create cache:
const cache = new InMemoryCache({
  addTypename: false
});

// Create an http link:


const httpLink = new HttpLink({
  uri:"http://localhost:4000/graphql",
})
const client = new ApolloClient({
    cache,
    link:ApolloLink.from([ httpLink])
  });

export default client;
