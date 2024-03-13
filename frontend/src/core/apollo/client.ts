import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import { onError } from '@apollo/client/link/error'
import { GRAPHQL_BASE_URL } from './constants'

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    )

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

export const httpLink = new HttpLink({
  uri: GRAPHQL_BASE_URL,
})

export const { getClient: getApolloClient } = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link: ApolloLink.from([errorLink, httpLink]),
    }),
)
