import { TPropsWithChildren } from '@/types/common.types'
import { Heading, Section } from '@carbon/react'
import styles from './title.module.scss'

type TProps = {
  level?: number
}

export const Title: TPropsWithChildren<TProps> = ({ children, level = 2 }) => (
  <Section level={level}>
    <Heading className={styles.heading}>{children}</Heading>
  </Section>
)
