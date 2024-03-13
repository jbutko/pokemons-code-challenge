'use client'

import { ApolloLink, HttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'
import { GRAPHQL_BASE_URL } from './constants'
import { enableDevLogging } from './utils'

enableDevLogging()

const makeClient = () => {
  const httpLink = new HttpLink({
    uri: GRAPHQL_BASE_URL,
  })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
      )

    if (networkError) console.log(`[Network error]: ${networkError}`)
  })

  const ssrClient = new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            errorLink,
            httpLink,
          ])
        : httpLink,
  })

  return ssrClient
}

export const ApolloWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
)
