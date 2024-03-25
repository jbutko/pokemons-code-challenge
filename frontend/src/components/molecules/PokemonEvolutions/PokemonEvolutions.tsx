import { ClickableTile, Column, Grid } from '@carbon/react'
import { PokemonTile } from '@/components/molecules/PokemonTile/PokemonTile'
import { IPokemon } from '@/types/pokemons'
import { Title } from '@/components/atoms/Title/Title'
import styles from './pokemon-evolutions.module.scss'

type TProps = {
  data: IPokemon['evolutions']
}

export const PokemonEvolutions: React.FC<TProps> = ({ data }) => {
  return (
    <Grid condensed className={styles.container}>
      <Column sm={4} md={8} lg={16} className={styles.title}>
        <Title level={3}>Evolutions</Title>
      </Column>
      {data.map((evolution) => (
        <Column lg={4} sm={4} md={8} key={evolution.id} className={styles.titleContainer}>
          <ClickableTile id={evolution.id} href={`/${evolution.name}`} className={styles.tile}>
            <PokemonTile data={evolution} showFavorite={false} />
          </ClickableTile>
        </Column>
      ))}
    </Grid>
  )
}
