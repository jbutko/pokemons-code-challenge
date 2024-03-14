import '@/styles/globals.scss'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ApolloWrapper } from '@/core/apollo/ApolloWrapper'
import { TPropsWithChildren } from '@/types/common.types'
import { PageLayout } from '@/components/layouts/PageLayout/PageLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brainsoft frontend code challenge',
  description: 'Pokemons code challenge, code by Jozef Butko',
}

const RootLayout: TPropsWithChildren = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <ApolloWrapper>
        <PageLayout condensed fullWidth>
          {children}
        </PageLayout>
      </ApolloWrapper>
    </body>
  </html>
)

export default RootLayout
