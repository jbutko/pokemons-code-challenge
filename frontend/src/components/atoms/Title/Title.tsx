import { TPropsWithChildren } from '@/types/common.types'
import { Heading, Section } from '@carbon/react'
import styles from './title.module.scss'

type TProps = {
  level?: number
  className?: string
}

export const Title: TPropsWithChildren<TProps> = ({ children, level = 2, className }) => (
  <Section level={level} className={className}>
    <Heading className={styles.heading}>{children}</Heading>
  </Section>
)
