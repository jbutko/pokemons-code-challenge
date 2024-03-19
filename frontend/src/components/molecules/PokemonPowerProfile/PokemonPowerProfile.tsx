import { Column, Grid } from '@carbon/react'
import { PowerItem } from './components/PowerItem/PowerItem'

type TProps = {
  maxCP: number
  maxHP: number
}

export const PokemonPowerProfile: React.FC<TProps> = ({ maxCP, maxHP }) => (
  <Grid lg={16}>
    <Column lg={16}>
      <PowerItem value={maxCP} status="active" label="CP" />
    </Column>
    <Column lg={16}>
      <PowerItem value={maxHP} status="finished" label="HP" />
    </Column>
  </Grid>
)
