import '@/styles/globals.scss'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ApolloWrapper } from '@/core/apollo/ApolloWrapper'
import { TPropsWithChildren } from '@/types/common.types'
import { PageLayout } from '@/components/layouts/PageLayout/PageLayout'
import { NotificationProvider } from '@/components/providers/NotificationProvider/NotificationProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokedex frontend code challenge',
  description: 'Code by Jozef Butko',
}

const RootLayout: TPropsWithChildren = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <ApolloWrapper>
        <NotificationProvider>
          <PageLayout>{children}</PageLayout>
        </NotificationProvider>
      </ApolloWrapper>
    </body>
  </html>
)

export default RootLayout
