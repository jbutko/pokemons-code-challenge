import { Pokemon } from '@/types/pokemons'
import { Column, Grid, Tile } from '@carbon/react'
import { Title } from '@/components/molecules/Title/Title'
import styles from './pokemon-size-stats.module.scss'

type TProps = {
  height: Pokemon['height']
  weight: Pokemon['weight']
}

export const PokemonSizeStats: React.FC<TProps> = ({ height, weight }) => (
  <Grid lg="100%" condensed>
    <Column lg="50%" md="50%" max="50%" className={styles.tileContainer}>
      <Tile key="weight" className={styles.tile}>
        <Title level={5}>Weight</Title>
        {weight.minimum} - {weight.maximum}
      </Tile>
    </Column>
    <Column lg="50%" md="50%" max="50%" className={styles.tileContainer}>
      <Tile key="height" className={styles.tile}>
        <Title level={5}>Height</Title>
        {height.minimum} - {height.maximum}
      </Tile>
    </Column>
  </Grid>
)
