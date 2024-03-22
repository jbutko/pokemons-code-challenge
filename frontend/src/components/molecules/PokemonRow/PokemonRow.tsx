'use client'

import Image from 'next/image'
import { Pokemon } from '@/types/pokemons'
import { Column, FlexGrid, Row } from '@carbon/react'
import { Title } from '@/components/molecules/Title/Title'
import { ToggleFavorite } from '@/components/molecules/ToggleFavorite/ToggleFavorite'
import { PokemonTags } from '@/components/molecules/PokemonTags/PokemonTags'
import { ButtonModal } from '@/components/molecules/ButtonModal/ButtonModal'

type TProps = {
  data: Pokemon
  onShowModal?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const PokemonRow: React.FC<TProps> = ({ data, onShowModal }) => (
  <FlexGrid condensed>
    <Row>
      <Column lg={2}>
        <Image src={data.image} alt={data.name} width={100} height={100} priority />
      </Column>
      <Column lg={12}>
        <Title level={4}>{data.name}</Title>
        {data.types && <PokemonTags tags={data.types} />}
      </Column>
      <Column lg={2}>
        <ToggleFavorite isFavorite={data.isFavorite} id={data.id} />
        {onShowModal && <ButtonModal onClick={onShowModal} />}
      </Column>
    </Row>
  </FlexGrid>
)
