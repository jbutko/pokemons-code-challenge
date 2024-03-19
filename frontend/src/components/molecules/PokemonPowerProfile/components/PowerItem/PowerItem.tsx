import { Column, Grid, ProgressBar } from '@carbon/react'

type TProps = {
  value: number
  status?: 'active' | 'finished' | 'error'
  label: string
}

export const PowerItem: React.FC<TProps> = ({ value, status, label }) => (
  <Grid fullWidth condensed>
    <Column lg={14}>
      <ProgressBar hideLabel label="" value={100} status={status} type="default" />
    </Column>
    <Column lg={2}>
      {label}: {value}
    </Column>
  </Grid>
)
