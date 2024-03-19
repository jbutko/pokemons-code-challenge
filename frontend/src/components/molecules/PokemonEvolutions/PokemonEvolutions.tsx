import { Column, Grid } from '@carbon/react'
import { PokemonTile } from '@/components/organisms/PokemonsList/components/PokemonTile/PokemonTile'
import { Pokemon } from '@/types/pokemons'
import { Title } from '@/components/molecules/Title/Title'

type TProps = {
  data: Pokemon['evolutions']
}

export const PokemonEvolutions: React.FC<TProps> = ({ data }) => {
  return (
    <Grid>
      <Column lg={16}>
        <Title level={3}>Evolutions</Title>
      </Column>
      {data.map((evolution) => (
        <Column lg={2} key={evolution.id}>
          <PokemonTile data={evolution} clickable={false} showFavorite={false} />
        </Column>
      ))}
    </Grid>
  )
}
