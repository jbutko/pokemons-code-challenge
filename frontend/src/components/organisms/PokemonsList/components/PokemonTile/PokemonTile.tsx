'use client'

import Image from 'next/image'
import { Pokemon } from '@/types/pokemons'
import { ClickableTile, Tile } from '@carbon/react'
import { Title } from '@/components/molecules/Title/Title'
import { ToggleFavorite } from '@/components/molecules/ToggleFavorite/ToggleFavorite'
import { PokemonTags } from '@/components/molecules/PokemonTags/PokemonTags'
import { PokemonPowerProfile } from '@/components/molecules/PokemonPowerProfile/PokemonPowerProfile'
import { PokemonSizeStats } from '@/components/molecules/PokemonSizeStats/PokemonSizeStats'
import { PokemonEvolutions } from '@/components/molecules/PokemonEvolutions/PokemonEvolutions'

type TProps = {
  clickable?: boolean
  data: Pokemon
  showDetails?: boolean
  showSimilar?: boolean
  showFavorite?: boolean
}

export const PokemonTile: React.FC<TProps> = ({
  data,
  clickable,
  showDetails = false,
  showSimilar = false,
  showFavorite,
}) => {
  const Container = clickable ? () => <ClickableTile id={data.id} href={`/${data.name}`} /> : Tile
  return (
    <Container>
      <Image src={data.image} alt={data.name} width={100} height={100} priority />
      <Title level={4}>{data.name}</Title>
      {data.types && <PokemonTags tags={data.types} />}
      {showDetails && (
        <>
          <PokemonPowerProfile maxCP={data.maxCP} maxHP={data.maxHP} />
          <PokemonSizeStats height={data.height} weight={data.weight} />
        </>
      )}
      {showSimilar && <PokemonEvolutions data={data.evolutions} />}
      {showFavorite && <ToggleFavorite isFavorite={data.isFavorite} id={data.id} />}
    </Container>
  )
}
