'use client'

import { PageLayout } from '@/components/layouts/PageLayout/PageLayout'
import { NextPage } from 'next'
import styles from './error.module.scss'
import { Title } from '@/components/atoms/Title/Title'

type TProps = {
  error: Error & { digest?: string }
  reset: () => void
}

const ErrorPage: NextPage<TProps> = ({ error, reset }) => {
  const message = error?.stack?.split(' (')?.[0]
  const hint = message?.includes('fetch failed') ? 'Hint: check backend API is running' : null

  return (
    <PageLayout className={styles.container}>
      <Title className={styles.title}>Ops! Something went wrong!</Title>
      <p>{error.toString()}</p>
      <p>{message}</p>
      {hint && <p>({hint})</p>}
    </PageLayout>
  )
}

export default ErrorPage
