'use client'

import { ShowDataCards, Thumbnail_2 } from '@carbon/icons-react'
import { Column, IconButton } from '@carbon/react'
import styles from './ListSwitcher.module.scss'

export const ListSwitcher: React.FC = () => (
  <Column className={styles.container}>
    <IconButton size="md" label="Grid" kind="ghost">
      <Thumbnail_2 />
    </IconButton>
    <IconButton size="md" label="List" kind="ghost">
      <ShowDataCards />
    </IconButton>
  </Column>
)
