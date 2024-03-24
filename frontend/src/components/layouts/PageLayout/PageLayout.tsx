'use client'

import { TPropsWithChildren } from '@/types/common.types'
import { Column, Grid, GridSettings } from '@carbon/react'
import { GridProps } from '@carbon/react/lib/components/Grid/GridTypes'

export const PageLayout: TPropsWithChildren<GridProps<React.ElementType>> = ({ children, ...gridProps }) => (
  <Grid condensed {...gridProps}>
    <GridSettings mode="css-grid">
      <Column sm={4} md={8} lg={16}>
        {children}
      </Column>
    </GridSettings>
  </Grid>
)
