'use client'

import { useRef, useState } from 'react'
import { Button, ClickableTile, Column, Grid } from '@carbon/react'
import { Pokemon } from '@/types/pokemons'
import { PokemonRow } from '@/components/molecules/PokemonRow/PokemonRow'
import { TNullable } from '@/types/common.types'
import { PokemonModal } from '../PokemonModal/PokemonModal'
import styles from './view-list.module.scss'

type TProps = {
  data: Pokemon[]
}

export const ViewList: React.FC<TProps> = ({ data }) => {
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
      <Grid narrow fullWidth>
        {data.map((pokemon) => (
          <Column key={pokemon.id} md={16} lg={16}>
            <ClickableTile id={pokemon.id} href={`/${pokemon.name}`} className={styles.tileContainer}>
              <PokemonRow key={pokemon.id} data={pokemon} onShowModal={(e) => handleShowModal(e, pokemon)} />
            </ClickableTile>
          </Column>
        ))}
      </Grid>
    </>
  )
}
