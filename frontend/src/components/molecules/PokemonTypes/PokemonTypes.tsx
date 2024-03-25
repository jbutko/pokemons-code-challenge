import { ComboBox, DropdownSkeleton } from '@carbon/react'
import { useSuspenseQuery } from '@apollo/client'
import { GET_POKEMON_TYPES } from '@/core/apollo/queries'
import styles from './pokemon-types.module.scss'
import { TNullable } from '@/types/common.types'
import { useUrlParams } from '@/hooks/useUrlParams'

export const PokemonTypes: React.FC = () => {
  const { data } = useSuspenseQuery(GET_POKEMON_TYPES)
  const { setUrlParams, searchParams } = useUrlParams()
  const SELECTED_ITEM = searchParams.pokemonType || ''

  if (!data?.pokemonTypes || !data) return <DropdownSkeleton hideLabel size="lg" className={styles.skeleton} />

  const handleSelect = (selectedItem?: TNullable<string>) =>
    setUrlParams({
      pokemonType: selectedItem || '',
      offset: '0',
      page: '0',
    })

  return (
    <ComboBox
      allowCustomValue={false}
      id="pokemon-type"
      items={data?.pokemonTypes}
      onChange={({ selectedItem }) => handleSelect(selectedItem)}
      placeholder="Select pokemon type"
      selectedItem={SELECTED_ITEM}
      shouldFilterItem={({ item, inputValue }) => item.toLowerCase().includes(inputValue?.toLowerCase() || '')}
      size="lg"
      downshiftProps={{
        id: 'pokemon-type',
      }}
    />
  )
}
