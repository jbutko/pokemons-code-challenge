'use client'

import { Dropdown, DropdownSkeleton } from '@carbon/react'
import { useQuery } from '@apollo/client'
import { GET_POKEMON_TYPES } from '@/core/apollo/queries'
import styles from './pokemon-types.module.scss'

export const PokemonTypes: React.FC = () => {
  const { data } = useQuery(GET_POKEMON_TYPES)

  if (!data?.pokemonTypes || !data) return <DropdownSkeleton hideLabel size="lg" className={styles.skeleton} />

  return (
    <Dropdown
      hideLabel
      id="default"
      items={data?.pokemonTypes || []}
      itemToString={(item: string) => (item ? item : '')}
      label="Select pokemon type"
      size="lg"
      titleText="Select pokemon type"
    />
  )
}
