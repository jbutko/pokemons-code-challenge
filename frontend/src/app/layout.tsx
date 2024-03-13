import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ApolloWrapper } from '@/core/apollo/ApolloWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brainsoft Frontend Code challenge',
  description: 'Pokemons code challenge, code by Jozef Butko',
}

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <ApolloWrapper>{children}</ApolloWrapper>
    </body>
  </html>
)

export default RootLayout
