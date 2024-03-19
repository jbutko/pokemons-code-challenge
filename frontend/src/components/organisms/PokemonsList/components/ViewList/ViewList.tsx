'use client'

import { Pokemon } from '@/types/pokemons'
import { ClickableTile, Column, Grid, SkeletonPlaceholder } from '@carbon/react'
import { PokemonTile } from '../PokemonTile/PokemonTile'

type TProps = {
  data: Pokemon[]
}

export const ViewList: React.FC<TProps> = ({ data }) => {
  return (
    <Grid fullWidth>
      {data.map((pokemon) => (
        <Column key={pokemon.id} lg={4}>
          <ClickableTile id={pokemon.id} href={`/${pokemon.name}`}>
            <PokemonTile key={pokemon.id} data={pokemon} />
          </ClickableTile>
        </Column>
      ))}
    </Grid>
  )
}
