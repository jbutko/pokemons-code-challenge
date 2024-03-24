'use client'

import { useRef, useState } from 'react'
import { Button, ClickableTile, Column, Grid } from '@carbon/react'
import { Pokemon } from '@/types/pokemons'
import { TNullable } from '@/types/common.types'
import { PokemonModal } from '../PokemonModal/PokemonModal'
import { PokemonTile } from '@/components/molecules/PokemonTile/PokemonTile'
import styles from './view-grid.module.scss'

type TProps = {
  data: Pokemon[]
}

export const ViewGrid: React.FC<TProps> = ({ data }) => {
  const button = useRef(null)
  const [activePokemon, setActivePokemon] = useState<TNullable<Pokemon>>(null)

  const handleClose = () => setActivePokemon(null)

  const handleShowModal = (e: React.MouseEvent<HTMLButtonElement>, pokemon: Pokemon) => {
    e.preventDefault()
    setActivePokemon(pokemon)
  }

  return (
    <>
      <PokemonModal data={activePokemon} onClose={handleClose} launcherButtonRef={button} />
      <Grid narrow fullWidth className={styles.container}>
        {data.map((pokemon) => (
          <Column key={pokemon.id} sm={4} lg={4}>
            <ClickableTile id={pokemon.id} href={`/${pokemon.name}`} className={styles.tile}>
              <PokemonTile key={pokemon.id} data={pokemon} onShowModal={(e) => handleShowModal(e, pokemon)} />
            </ClickableTile>
          </Column>
        ))}
      </Grid>
    </>
  )
}
