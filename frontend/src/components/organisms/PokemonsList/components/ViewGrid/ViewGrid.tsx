'use client'

import { useRef, useState } from 'react'
import { Button, ClickableTile, Column, Grid } from '@carbon/react'
import { Pokemon } from '@/types/pokemons'
import { PokemonTile } from '@/components/molecules/PokemonTile/PokemonTile'
import { Modal } from '@/components/molecules/Modal/Modal'
import { TNullable } from '@/types/common.types'

type TProps = {
  data: Pokemon[]
}

export const ViewGrid: React.FC<TProps> = ({ data }) => {
  const button = useRef(null)
  const [activePokemon, setActivePokemon] = useState<TNullable<Pokemon>>(null)

  const handleClick = (pokemon: Pokemon) => setActivePokemon(pokemon)

  const handleClose = () => setActivePokemon(null)

  return (
    <>
      <Modal
        aria-label="Pokemon details"
        id="pokemon-details"
        headerProps={{
          title: 'Pokemon details',
        }}
        launcherButtonRef={button}
        onClose={handleClose}
        onSubmit={handleClose}
        open={!!activePokemon}
      >
        {!!activePokemon && (
          <PokemonTile
            data={activePokemon}
            key={activePokemon.id}
            showDetails
            showFavorite={false}
            showSimilar
            showSound
          />
        )}
      </Modal>
      <Grid fullWidth>
        {data.map((pokemon) => (
          <Column key={pokemon.id} lg={4}>
            <ClickableTile id={pokemon.id} href={`/${pokemon.name}`}>
              <PokemonTile key={pokemon.id} data={pokemon} />
            </ClickableTile>
            <Button onClick={() => handleClick(pokemon)} type="button">
              Show detail
            </Button>
          </Column>
        ))}
      </Grid>
    </>
  )
}
