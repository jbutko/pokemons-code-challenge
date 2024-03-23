import { Column, Grid } from '@carbon/react'
import { PokemonTile } from '@/components/molecules/PokemonTile/PokemonTile'
import { Pokemon } from '@/types/pokemons'
import { Title } from '@/components/molecules/Title/Title'
import styles from './pokemon-evolutions.module.scss'

type TProps = {
  data: Pokemon['evolutions']
}

export const PokemonEvolutions: React.FC<TProps> = ({ data }) => {
  return (
    <Grid condensed className={styles.container}>
      <Column lg={16} className={styles.title}>
        <Title level={3}>Evolutions</Title>
      </Column>
      {data.map((evolution) => (
        <Column lg={4} key={evolution.id}>
          <PokemonTile data={evolution} showFavorite={false} />
        </Column>
      ))}
    </Grid>
  )
}
