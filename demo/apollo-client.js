import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

const client = new ApolloClient({

  url: "http://localhost:4000",
  cache: new InMemoryCache(),
})

export default client;