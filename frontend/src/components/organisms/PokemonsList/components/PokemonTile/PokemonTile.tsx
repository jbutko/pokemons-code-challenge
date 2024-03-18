import Image from 'next/image'
import { Pokemon } from '@/types/pokemons'
import { ClickableTile } from '@carbon/react'
import { Title } from '@/components/molecules/Title/Title'

type TProps = {
  data: Pokemon
}

export const PokemonTile: React.FC<TProps> = ({ data }) => (
  <ClickableTile id={data.id} href={`/${data.name}`}>
    <Image src={data.image} alt={data.name} width={100} height={100} priority />
    <Title level={4}>{data.name}</Title>
  </ClickableTile>
)
