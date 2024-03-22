import { Column, Grid, ProgressBar } from '@carbon/react'
import styles from './power-item.module.scss'

type TProps = {
  value: number
  status?: 'active' | 'finished' | 'error'
  label: string
}

export const PowerItem: React.FC<TProps> = ({ value, status, label }) => (
  <Grid fullWidth condensed className={styles.container}>
    <Column lg={14}>
      <ProgressBar hideLabel label="" value={100} status={status} type="default" className={styles.progressBar} />
    </Column>
    <Column lg={2}>
      <span className={styles.label}>{label}</span>: {value}
    </Column>
  </Grid>
)
