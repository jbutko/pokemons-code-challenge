'use client'

import { PokemonTile } from '@/components/molecules/PokemonTile/PokemonTile'
import { TNullable } from '@/types/common.types'
import { Pokemon } from '@/types/pokemons'
import { ClickableTile, Column, Grid } from '@carbon/react'
import { useRef, useState } from 'react'
import { PokemonModal } from '../PokemonModal/PokemonModal'
import styles from './view-grid.module.scss'

type TProps = {
  data: Pokemon[]
}

export const ViewGrid: React.FC<TProps> = ({ data }) => {
  const button = useRef(null)
  const [activePokemonId, setActivePokemonId] = useState<TNullable<Pokemon['id']>>(null)

  const handleClose = () => setActivePokemonId(null)

  const handleShowModal = (e: React.MouseEvent<HTMLButtonElement>, pokemon: Pokemon) => {
    e.preventDefault()
    e.stopPropagation()
    setActivePokemonId(pokemon.id)
  }

  const activePokemon = data.find((pokemon) => pokemon.id === activePokemonId)

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
