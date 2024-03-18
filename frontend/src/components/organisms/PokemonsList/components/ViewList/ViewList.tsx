'use client'

import { Pokemon } from '@/types/pokemons'
import { Column, Grid, SkeletonPlaceholder } from '@carbon/react'
import { PokemonTile } from '../PokemonTile/PokemonTile'

type TProps = {
  data: Pokemon[]
}

export const ViewList: React.FC<TProps> = ({ data }) => {
  return (
    <Grid fullWidth>
      {data.map((pokemon) => (
        <Column key={pokemon.id} lg={4}>
          <PokemonTile key={pokemon.id} data={pokemon} />
        </Column>
      ))}
    </Grid>
  )
}
