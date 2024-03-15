'use client'

import { HeaderToolbar } from '@/components/molecules/HeaderToolbar/HeaderToolbar'
import { ViewsTab } from '@/components/molecules/ViewsTab/ViewsTab'
import { Column, Grid } from '@carbon/react'

export const Header: React.FC = () => (
  <Grid fullWidth>
    <Column sm={8} md={8} lg={16}>
      <ViewsTab />
    </Column>
    <Column sm={8} md={8} lg={16}>
      <HeaderToolbar />
    </Column>
  </Grid>
)
