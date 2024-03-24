import { Column, Grid, ProgressBar } from '@carbon/react'
import styles from './power-item.module.scss'

type TProps = {
  value: number
  status?: 'active' | 'finished' | 'error'
  label: string
}

export const PowerItem: React.FC<TProps> = ({ value, status, label }) => (
  <Grid fullWidth condensed className={styles.container}>
    <Column sm={3} md={7} lg={14}>
      <ProgressBar hideLabel label="" value={100} status={status} type="default" className={styles.progressBar} />
    </Column>
    <Column
      sm={{ span: 1, offset: 3 }}
      md={{ span: 2, offset: 7 }}
      lg={{ span: 2, offset: 14 }}
      className={styles.labelContainer}
    >
      <span className={styles.label}>{label}</span>: {value}
    </Column>
  </Grid>
)
