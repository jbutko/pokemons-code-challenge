import { IPokemon } from '@/types/pokemons'
import { Column, Grid, Tile } from '@carbon/react'
import { Title } from '@/components/atoms/Title/Title'
import styles from './pokemon-size-stats.module.scss'

type TProps = {
  height: IPokemon['height']
  weight: IPokemon['weight']
}

export const PokemonSizeStats: React.FC<TProps> = ({ height, weight }) => (
  <Grid condensed className={styles.container}>
    <Column lg={8} md={4} sm={2} className={styles.tileContainer}>
      <Tile key="weight" className={styles.tile}>
        <Title level={5}>Weight</Title>
        {weight.minimum} - {weight.maximum}
      </Tile>
    </Column>
    <Column lg={8} md={4} sm={2} className={styles.tileContainer}>
      <Tile key="height" className={styles.tile}>
        <Title level={5}>Height</Title>
        {height.minimum} - {height.maximum}
      </Tile>
    </Column>
  </Grid>
)
