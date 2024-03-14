'use client'

import { TPropsWithChildren } from '@/types/common.types'
import { Column, Grid } from '@carbon/react'
import { GridProps } from '@carbon/react/lib/components/Grid/GridTypes'

export const PageLayout: TPropsWithChildren<GridProps<React.ElementType>> = ({ children, ...gridProps }) => (
  <Grid fullWidth {...gridProps}>
    <Column lg={16}>{children}</Column>
  </Grid>
)
