import { getApolloClient } from '@/core/apollo/client'
import { GET_POKEMONS } from '@/core/apollo/queries'
import { ViewList } from './components/ViewList/ViewList'
import { TRSCProps } from '@/types/common.types'
import { ListPagination } from './components/ListPagination/ListPagination'
import { ViewGrid } from './components/ViewGrid/ViewGrid'

type TSearchParams = {
  limit?: number
  offset?: number
  search?: string
  pokemonType?: string
  viewTypeIndex?: string
  listType?: string
}

type TProps = {
  searchParams: TRSCProps<TSearchParams>['searchParams']
}

export const PokemonsList: React.FC<TProps> = async ({ searchParams }) => {
  const { limit, offset, search, pokemonType, viewTypeIndex, listType } = searchParams
  const LIMIT = Number(limit) || 16

  const { data } = await getApolloClient().query({
    query: GET_POKEMONS,
    variables: {
      query: {
        limit: LIMIT,
        offset: Number(offset) || 0,
        search,
        filter: {
          type: pokemonType,
          isFavorite: viewTypeIndex === '1',
        },
      },
    },
  })

  return (
    <>
      {listType === 'list' ? <ViewList data={data?.pokemons?.edges} /> : <ViewGrid data={data?.pokemons?.edges} />}
      <ListPagination limit={LIMIT} count={data?.pokemons?.count} />
    </>
  )
}
