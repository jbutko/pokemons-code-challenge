'use client'

import Image from 'next/image'
import { Pokemon } from '@/types/pokemons'
import { Tile } from '@carbon/react'
import { Title } from '@/components/molecules/Title/Title'
import { ToggleFavorite } from '@/components/molecules/ToggleFavorite/ToggleFavorite'
import { PokemonTags } from '@/components/molecules/PokemonTags/PokemonTags'
import { PokemonPowerProfile } from '@/components/molecules/PokemonPowerProfile/PokemonPowerProfile'
import { PokemonSizeStats } from '@/components/molecules/PokemonSizeStats/PokemonSizeStats'
import { PokemonEvolutions } from '@/components/molecules/PokemonEvolutions/PokemonEvolutions'
import { PlaySound } from '@/components/molecules/PlaySound/PlaySound'

type TProps = {
  data: Pokemon
  showDetails?: boolean
  showFavorite?: boolean
  showSimilar?: boolean
  showSound?: boolean
}

export const PokemonTile: React.FC<TProps> = ({
  data,
  showDetails = false,
  showFavorite = true,
  showSimilar = false,
  showSound = false,
}) => (
  <Tile>
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
    {showSound && <PlaySound url={data.sound} />}
  </Tile>
)
