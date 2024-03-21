'use client'

import Image from 'next/image'
import { Pokemon } from '@/types/pokemons'
import { Column, FlexGrid, Row } from '@carbon/react'
import { Title } from '@/components/molecules/Title/Title'
import { ToggleFavorite } from '@/components/molecules/ToggleFavorite/ToggleFavorite'
import { PokemonTags } from '@/components/molecules/PokemonTags/PokemonTags'

type TProps = {
  data: Pokemon
}

export const PokemonRow: React.FC<TProps> = ({ data }) => (
  <FlexGrid condensed>
    <Row>
      <Column lg={2}>
        <Image src={data.image} alt={data.name} width={100} height={100} priority />
      </Column>
      <Column lg={13}>
        <Title level={4}>{data.name}</Title>
        {data.types && <PokemonTags tags={data.types} />}
      </Column>
      <Column lg={1}>
        <ToggleFavorite isFavorite={data.isFavorite} id={data.id} />
      </Column>
    </Row>
  </FlexGrid>
)
