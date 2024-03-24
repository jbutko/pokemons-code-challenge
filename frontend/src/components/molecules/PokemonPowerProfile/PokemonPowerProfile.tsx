import { Column, Grid } from '@carbon/react'
import { PowerItem } from './components/PowerItem/PowerItem'
import styles from './pokemon-power-profile.module.scss'

type TProps = {
  maxCP: number
  maxHP: number
}

export const PokemonPowerProfile: React.FC<TProps> = ({ maxCP, maxHP }) => (
  <Grid className={styles.container}>
    <Column sm={4} md={8} lg={16}>
      <PowerItem value={maxCP} status="active" label="CP" />
    </Column>
    <Column sm={4} md={8} lg={16}>
      <PowerItem value={maxHP} status="finished" label="HP" />
    </Column>
  </Grid>
)
