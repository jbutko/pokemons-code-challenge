import { NextPage } from 'next'
import { TRSCProps } from '@/types/common.types'
import { GET_POKEMON_BY_NAME } from '@/core/apollo/queries'
import { getApolloClient } from '@/core/apollo/client'
import { PokemonTile } from '@/components/molecules/PokemonTile/PokemonTile'

type TParams = {
  name: string
}

const Detail: NextPage<TRSCProps<TParams>> = async ({ params: { name } }) => {
  const {
    data: { pokemonByName },
  } = await getApolloClient().query({
    query: GET_POKEMON_BY_NAME,
    variables: {
      name,
    },
  })

  return (
    <>
      <PokemonTile key={pokemonByName.id} data={pokemonByName} showDetails showSimilar showSound />
    </>
  )
}

export default Detail
