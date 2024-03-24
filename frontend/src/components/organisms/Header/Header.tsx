'use client'

import { HeaderToolbar } from '@/components/molecules/HeaderToolbar/HeaderToolbar'
import { ViewsTab } from '@/components/molecules/ViewsTab/ViewsTab'
import { Column, Grid } from '@carbon/react'
import styles from './header.module.scss'

export const Header: React.FC = () => (
  <Grid narrow fullWidth className={styles.container}>
    <Column sm={4} md={8} lg={16}>
      <ViewsTab />
    </Column>
    <Column sm={4} md={8} lg={16}>
      <HeaderToolbar />
    </Column>
  </Grid>
)
